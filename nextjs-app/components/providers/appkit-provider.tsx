"use client";

import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, polygon, arbitrum, optimism, base, sepolia } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";
import { defineChain } from "viem";
import { ReactNode, useState, useEffect, useRef } from "react";

const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "";

const shouldInitializeAppKit = projectId && projectId !== "" && projectId !== "YOUR_PROJECT_ID";

const metadata = {
  name: "OpenX Academy",
  description: "Innovative Web3 Education Platform",
  url: typeof window !== "undefined" ? window.location.origin : "https://openx.academy",
  icons: ["/icon.png"],
};

const polygonAmoy = defineChain({
  id: 80002,
  name: "Polygon Amoy",
  nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-amoy.polygon.technology"],
    },
  },
  blockExplorers: {
    default: {
      name: "Polygonscan",
      url: "https://amoy.polygonscan.com",
    },
  },
  testnet: true,
});

const isTestnet = process.env.NEXT_PUBLIC_NETWORK === "testnet";
const networks = isTestnet
  ? [polygonAmoy, sepolia] as [typeof polygonAmoy, typeof sepolia]
  : [polygon, base, mainnet, arbitrum, optimism, sepolia] as [typeof polygon, typeof base, typeof mainnet, typeof arbitrum, typeof optimism, typeof sepolia];

interface AppKitProviderProps {
  children: ReactNode;
}

export function AppKitProvider({ children }: AppKitProviderProps) {
  const [queryClient] = useState(() => new QueryClient());
  const wagmiAdapterRef = useRef<WagmiAdapter | null>(null);
  const [wagmiConfig, setWagmiConfig] = useState(() => {
    const chains = isTestnet 
      ? [polygonAmoy, sepolia] as [typeof polygonAmoy, typeof sepolia]
      : [polygon, base, mainnet, arbitrum, optimism, sepolia] as [typeof polygon, typeof base, typeof mainnet, typeof arbitrum, typeof optimism, typeof sepolia];
    
    return createConfig({
      chains,
      transports: Object.fromEntries(
        chains.map((chain) => [chain.id, http()])
      ) as any,
    });
  });

  useEffect(() => {
    if (!shouldInitializeAppKit || typeof window === "undefined") return;

    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    const suppressFetchErrors = () => {
      console.error = (...args: any[]) => {
        const message = args.join(" ");
        if (message.includes("Failed to fetch") || message.includes("fetch")) {
          return;
        }
        originalConsoleError.apply(console, args);
      };

      console.warn = (...args: any[]) => {
        const message = args.join(" ");
        if (message.includes("Failed to fetch") || message.includes("fetch")) {
          return;
        }
        originalConsoleWarn.apply(console, args);
      };
    };

    const restoreConsole = () => {
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
    };

    suppressFetchErrors();

    const errorHandler = (event: ErrorEvent) => {
      if (event.message && (event.message.includes("Failed to fetch") || event.message.includes("fetch"))) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    };

    const unhandledRejectionHandler = (event: PromiseRejectionEvent) => {
      const reason = event.reason?.toString() || "";
      if (reason.includes("Failed to fetch") || reason.includes("fetch")) {
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener("error", errorHandler);
    window.addEventListener("unhandledrejection", unhandledRejectionHandler);

    const initAppKit = async () => {
      try {
        const adapter = new WagmiAdapter({
          networks,
          projectId,
        });

        wagmiAdapterRef.current = adapter;

        createAppKit({
          adapters: [adapter],
          networks,
          projectId,
          metadata,
          features: {
            analytics: true,
          },
          defaultAccountTypes: {
            eip155: "eoa",
          },
        });

        setWagmiConfig(adapter.wagmiConfig as any);
      } catch (error) {
        // Silently handle AppKit initialization errors
        // Keep using default config
      }
    };

    initAppKit().catch(() => {
      // Silently handle async errors
    });

    setTimeout(() => {
      restoreConsole();
    }, 5000);

    return () => {
      window.removeEventListener("error", errorHandler);
      window.removeEventListener("unhandledrejection", unhandledRejectionHandler);
      restoreConsole();
    };
  }, []);

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

