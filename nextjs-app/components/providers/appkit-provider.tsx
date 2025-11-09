"use client";

import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, polygon, arbitrum, optimism, base, sepolia } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { ReactNode, useState } from "react";

// Get project ID from environment variable
// You'll need to set this in your .env.local file
// Get your project ID from https://dashboard.reown.com
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "";

// Only initialize AppKit if project ID is provided
const shouldInitializeAppKit = projectId && projectId !== "" && projectId !== "YOUR_PROJECT_ID";

const metadata = {
  name: "Open Circle",
  description: "Web3 Educational Platform",
  url: typeof window !== "undefined" ? window.location.origin : "https://opencircle.xyz",
  icons: ["/icon.png"],
};

const networks = [mainnet, polygon, arbitrum, optimism, base, sepolia] as [typeof mainnet, typeof polygon, typeof arbitrum, typeof optimism, typeof base, typeof sepolia];

let wagmiAdapter: WagmiAdapter | null = null;

if (shouldInitializeAppKit) {
  try {
    wagmiAdapter = new WagmiAdapter({
      networks,
      projectId,
    });

    // Initialize AppKit
    createAppKit({
      adapters: [wagmiAdapter],
      networks,
      projectId,
      metadata,
      features: {
        analytics: true,
      },
    });
  } catch (error) {
    console.warn("Failed to initialize AppKit:", error);
  }
}

interface AppKitProviderProps {
  children: ReactNode;
}

export function AppKitProvider({ children }: AppKitProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  // If AppKit is not initialized, just render children
  if (!wagmiAdapter || !shouldInitializeAppKit) {
    return <>{children}</>;
  }

  try {
    return (
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    );
  } catch (error) {
    console.warn("Failed to render AppKit provider:", error);
    return <>{children}</>;
  }
}

