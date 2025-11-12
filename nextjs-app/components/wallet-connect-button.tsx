"use client";

import dynamic from "next/dynamic";

// Inner component that uses the hook - imported dynamically
const WalletConnectButtonInner = dynamic(
  async () => {
    const { useAppKit } = await import("@reown/appkit/react");
    
    return function WalletConnectButtonInner() {
      const { open } = useAppKit();

      return (
        <button
          onClick={() => open()}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-10 py-7 text-lg font-bold shadow-2xl transition-all hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234))',
            color: 'white',
          }}
        >
          Connect Wallet
        </button>
      );
    };
  },
  {
    ssr: false,
    loading: () => (
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-10 py-7 text-lg font-bold shadow-2xl transition-all hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234))',
          color: 'white',
        }}
        disabled
      >
        Connect Wallet
      </button>
    ),
  }
);

export { WalletConnectButtonInner as WalletConnectButton };

