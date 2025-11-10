"use client";

import React from "react";
import { CheckCircle2, Circle, ExternalLink } from "lucide-react";
import { getOpenRDTaskUrl } from "@/lib/onchain-certificates";

interface CourseProgressProps {
  courseId: string;
  completedModules: number;
  totalModules: number;
  progressPercentage: number;
  openRDTasksCompleted?: number;
}

export default function CourseProgress({
  courseId,
  completedModules,
  totalModules,
  progressPercentage,
  openRDTasksCompleted = 0,
}: CourseProgressProps) {
  const openRDTaskUrl = getOpenRDTaskUrl(courseId);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Course Progress
          </h3>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {progressPercentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Modules Completed
          </span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {completedModules} / {totalModules}
          </span>
        </div>

        {openRDTasksCompleted > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              OpenR&D Tasks Completed
            </span>
            <span className="font-semibold text-green-600 dark:text-green-400">
              {openRDTasksCompleted}
            </span>
          </div>
        )}

        <a
          href={openRDTaskUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-4"
        >
          <ExternalLink className="w-4 h-4" />
          View Tasks on OpenR&D
        </a>
      </div>
    </div>
  );
}

