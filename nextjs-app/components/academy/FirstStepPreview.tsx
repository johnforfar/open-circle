"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle,
  Lock,
  Clock,
  FileText,
  Coins,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const lessons = [
  {
    id: 1,
    title: "What is Blockchain?",
    duration: "5 min",
    type: "video",
    locked: false,
  },
  {
    id: 2,
    title: "Understanding Decentralization",
    duration: "7 min",
    type: "video",
    locked: false,
  },
  {
    id: 3,
    title: "Your First Wallet",
    duration: "10 min",
    type: "interactive",
    locked: false,
  },
  {
    id: 4,
    title: "Quiz: Blockchain Basics",
    duration: "5 min",
    type: "quiz",
    locked: true,
  },
] as const;

type Lesson = (typeof lessons)[number];

export default function FirstStepPreview() {
  const [currentLesson, setCurrentLesson] = useState<Lesson>(lessons[0]);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const unlockableLessons = lessons.filter((lesson) => !lesson.locked);
  const allCompleted =
    completedLessons.length === unlockableLessons.length && unlockableLessons.length > 0;
  const progress =
    unlockableLessons.length > 0
      ? (completedLessons.length / unlockableLessons.length) * 100
      : 0;

  const handleLessonComplete = () => {
    if (completedLessons.includes(currentLesson.id)) {
      return;
    }

    const updatedCompleted = [...completedLessons, currentLesson.id];
    setCompletedLessons(updatedCompleted);

    const nextLesson = lessons.find(
      (lesson) => !lesson.locked && !updatedCompleted.includes(lesson.id),
    );

    if (nextLesson) {
      setCurrentLesson(nextLesson);
    }
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start with your first step
          </h2>
          <p className="text-xl text-gray-600">
            Complete this quick intro course and earn your first 50 OPENX tokens + NFT
            certificate
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl bg-gray-900 shadow-xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {currentLesson.type === "video" ? (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-white text-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                        <Play className="w-10 h-10" />
                      </div>
                      <p className="text-sm">Video player placeholder</p>
                      <p className="text-xs opacity-70 mt-1">
                        Playing: {currentLesson.title}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-white/70 text-center">
                      <FileText className="w-16 h-16 text-white/50 mx-auto mb-4" />
                      <p className="text-sm">Interactive / Quiz Placeholder</p>
                      <p className="text-xs opacity-70 mt-1">
                        Content for: {currentLesson.title}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {currentLesson.title}
              </h3>
              <p className="text-gray-600 mb-6">
                Learn the fundamentals of blockchain technology, including how it works,
                its key components, and why it&apos;s revolutionary.
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{currentLesson.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 capitalize">
                    {currentLesson.type === "video" ? (
                      <Play className="w-4 h-4" />
                    ) : (
                      <FileText className="w-4 h-4" />
                    )}
                    <span>{currentLesson.type}</span>
                  </div>
                </div>

                {completedLessons.includes(currentLesson.id) ? (
                  <Button
                    variant="outline"
                    disabled
                    className="rounded-xl border-green-200 bg-green-50 text-green-700"
                  >
                    <CheckCircle className="mr-2 w-4 h-4" />
                    Completed!
                  </Button>
                ) : (
                  <Button
                    onClick={handleLessonComplete}
                    className="rounded-xl bg-gray-900 hover:bg-gray-800"
                  >
                    <CheckCircle className="mr-2 w-4 h-4" />
                    Mark Complete
                  </Button>
                )}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-1"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-4">Course Progress</h4>

            <div className="mb-6">
              <div className="flex items-center justify-between text-sm mb-2 text-gray-600">
                <span>
                  {completedLessons.length} of {unlockableLessons.length} complete
                </span>
                <span className="font-bold text-gray-900">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {lessons.map((lesson, index) => {
                const isCurrent = lesson.id === currentLesson.id;
                const isCompleted = completedLessons.includes(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    onClick={() => !lesson.locked && setCurrentLesson(lesson)}
                    disabled={lesson.locked}
                    className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all ${
                      isCurrent
                        ? "bg-gray-900 text-white"
                        : isCompleted
                        ? "bg-green-50 text-green-900 hover:bg-green-100"
                        : lesson.locked
                        ? "cursor-not-allowed bg-gray-50 text-gray-400"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${
                        isCurrent
                          ? "bg-white/20"
                          : isCompleted
                          ? "bg-green-200"
                          : "bg-gray-200"
                      }`}
                    >
                      {lesson.locked ? (
                        <Lock
                          className={`h-4 w-4 ${
                            isCurrent ? "text-white/70" : "text-gray-500"
                          }`}
                        />
                      ) : isCompleted ? (
                        <CheckCircle className="h-4 w-4 text-green-700" />
                      ) : (
                        <span
                          className={`text-xs font-bold ${
                            isCurrent ? "text-white" : "text-gray-700"
                          }`}
                        >
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate text-sm font-semibold ${
                          isCurrent ? "text-white" : ""
                        }`}
                      >
                        {lesson.title}
                      </p>
                      <p
                        className={`text-xs ${
                          isCurrent ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        {lesson.duration}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {allCompleted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-4 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h5 className="font-bold text-gray-900 mb-1">Congratulations!</h5>
                <p className="text-sm text-gray-600 mb-4">
                  You&apos;ve completed the course
                </p>
                <Button className="w-full rounded-xl bg-gray-900 hover:bg-gray-800">
                  Claim Rewards
                </Button>
              </motion.div>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-4">
                <h5 className="font-bold text-gray-900 mb-3">Course Rewards</h5>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-3">
                    <Coins className="h-5 w-5 text-yellow-600" />
                    <span>50 OPENX Tokens</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>NFT Certificate</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
