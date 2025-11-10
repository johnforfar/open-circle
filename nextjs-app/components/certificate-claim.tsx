"use client";

import React, { useState } from "react";
import { useAccount } from "wagmi";
import { Award, ExternalLink, CheckCircle2, Loader2, QrCode } from "lucide-react";
import { getOpenRDTaskUrl } from "@/lib/onchain-certificates";

interface CertificateClaimProps {
  courseId: string;
  courseTitle: string;
  isCompleted: boolean;
  certificateClaimed: boolean;
  certificateTokenId?: string;
}

export default function CertificateClaim({
  courseId,
  courseTitle,
  isCompleted,
  certificateClaimed,
  certificateTokenId,
}: CertificateClaimProps) {
  const { address, isConnected } = useAccount();
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimError, setClaimError] = useState<string | null>(null);

  const handleClaim = async () => {
    if (!isConnected || !address) {
      setClaimError("Please connect your wallet first");
      return;
    }

    if (!isCompleted) {
      setClaimError("Please complete all course modules first");
      return;
    }

    setIsClaiming(true);
    setClaimError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Certificate claimed:", { courseId, address });
    } catch (error) {
      console.error("Failed to claim certificate:", error);
      setClaimError("Failed to claim certificate. Please try again.");
    } finally {
      setIsClaiming(false);
    }
  };

  const openRDTaskUrl = getOpenRDTaskUrl(courseId);

  if (certificateClaimed && certificateTokenId) {
    return (
      <div className="border border-green-200 dark:border-green-800 rounded-xl p-6 bg-green-50 dark:bg-green-900/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Certificate Claimed
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Your certificate has been minted as an NFT on Polygon network.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`/certificates/${certificateTokenId}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Award className="w-4 h-4" />
                View Certificate
              </a>
              <a
                href={openRDTaskUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                OpenR&D Tasks
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isCompleted) {
    return (
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Complete Course to Claim Certificate
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Finish all modules and assessments to receive your onchain certificate NFT.
            </p>
            <a
              href={openRDTaskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <ExternalLink className="w-4 h-4" />
              View OpenR&D Tasks
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-blue-200 dark:border-blue-800 rounded-xl p-6 bg-blue-50 dark:bg-blue-900/20">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
          <QrCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Claim Your Certificate
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Your certificate will be minted as an NFT on Polygon network and stored on IPFS.
          </p>
          
          {claimError && (
            <div className="mb-4 p-3 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
              <p className="text-sm text-red-600 dark:text-red-400">{claimError}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleClaim}
              disabled={isClaiming || !isConnected}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              {isClaiming ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Claiming...
                </>
              ) : (
                <>
                  <Award className="w-4 h-4" />
                  Claim Certificate NFT
                </>
              )}
            </button>
            
            {!isConnected && (
              <p className="text-sm text-gray-600 dark:text-gray-400 self-center">
                Connect wallet to claim
              </p>
            )}

            <a
              href={openRDTaskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              OpenR&D Integration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

