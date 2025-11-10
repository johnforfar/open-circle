"use client";

import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { getUserCourseProgress } from "@/lib/user-progress-query";
import { CourseProgress } from "@/lib/onchain-certificates";
import CourseProgressComponent from "./course-progress";
import CertificateClaim from "./certificate-claim";

interface CourseProgressClientProps {
  courseId: string;
  courseTitle: string;
  totalModules: number;
}

export default function CourseProgressClient({
  courseId,
  courseTitle,
  totalModules,
}: CourseProgressClientProps) {
  const { address, isConnected } = useAccount();
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProgress() {
      if (!isConnected || !address) {
        setProgress({
          courseId,
          completedModules: 0,
          totalModules,
          progressPercentage: 0,
          completedModuleIds: [],
          certificateClaimed: false,
          openRDTasksCompleted: 0,
        });
        setLoading(false);
        return;
      }

      try {
        const userProgress = await getUserCourseProgress(address, courseId, totalModules);
        setProgress(userProgress);
      } catch (error) {
        console.error("Error fetching progress:", error);
        setProgress({
          courseId,
          completedModules: 0,
          totalModules,
          progressPercentage: 0,
          completedModuleIds: [],
          certificateClaimed: false,
          openRDTasksCompleted: 0,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchProgress();
  }, [address, isConnected, courseId, totalModules]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-4"></div>
            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!progress) {
    return null;
  }

  const isCompleted = progress.progressPercentage === 100;

  return (
    <div className="space-y-6">
      <CourseProgressComponent
        courseId={courseId}
        completedModules={progress.completedModules}
        totalModules={progress.totalModules}
        progressPercentage={progress.progressPercentage}
        openRDTasksCompleted={progress.openRDTasksCompleted}
      />

      <CertificateClaim
        courseId={courseId}
        courseTitle={courseTitle}
        isCompleted={isCompleted}
        certificateClaimed={progress.certificateClaimed}
        certificateTokenId={progress.certificateTokenId}
      />
    </div>
  );
}

