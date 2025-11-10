"use client";

import { useEffect, useRef } from "react";
import "@reown/appkit/react";

export function WalletConnectButton() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const buttonElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (buttonRef.current && typeof window !== "undefined" && !buttonElementRef.current) {
      const button = document.createElement("appkit-button");
      buttonRef.current.appendChild(button);
      buttonElementRef.current = button;
      
      return () => {
        if (buttonElementRef.current && buttonElementRef.current.parentNode) {
          buttonElementRef.current.parentNode.removeChild(buttonElementRef.current);
          buttonElementRef.current = null;
        }
      };
    }
  }, []);

  return (
    <div 
      ref={buttonRef}
      className="wallet-connect-button"
      style={{ minWidth: "140px", minHeight: "40px" }}
    />
  );
}

