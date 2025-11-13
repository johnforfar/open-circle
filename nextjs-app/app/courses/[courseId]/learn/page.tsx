"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAccount } from "wagmi";
import Navbar from "@/components/navbar";
import Footer from "@/components/academy/Footer";
import { curriculumData } from "@/templates/courses/openxai-openmesh-curriculum";
import { CheckCircle2, Circle, Lock, ArrowRight, Wallet, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WalletConnectButton } from "@/components/wallet-connect-button";
import { useRouter, useParams } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import confetti from "canvas-confetti";

export default function CourseLearnPage() {
  const params = useParams();
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const courseId = params.courseId as string;
  const course = curriculumData.courses.find((c) => c.id === courseId);

  const [currentModule, setCurrentModule] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizError, setQuizError] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const confettiTriggered = useRef(false);

  if (!course) {
    return null;
  }

  const progress = (completedModules.length / course.modules.length) * 100;
  const isQuiz = currentModule === course.modules.length - 1;
  const isLastModule = currentModule === course.modules.length - 1;
  const allModulesCompleted = completedModules.length === course.modules.length;

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  useEffect(() => {
    if (quizCompleted && !confettiTriggered.current) {
      confettiTriggered.current = true;
      triggerConfetti();
      setShowCelebration(true);
    }
  }, [quizCompleted]);

  const handleModuleComplete = () => {
    if (!completedModules.includes(currentModule)) {
      setCompletedModules([...completedModules, currentModule]);
    }
    if (currentModule < course.modules.length - 1) {
      setCurrentModule(currentModule + 1);
    }
  };

  const handleQuizSubmit = () => {
    const requiredQuestions = [1, 2, 3];

    if (requiredQuestions.some((question) => !quizAnswers[question])) {
      setQuizError("Answer all questions before submitting.");
      setQuizSubmitted(true);
      setQuizScore(null);
      return;
    }

    const correctAnswers: Record<number, string> = {
      1: "You control your private keys",
      2: "Reown",
      3: "Your seed phrase",
    };

    const score = requiredQuestions.reduce((total, question) => {
      return total + (quizAnswers[question] === correctAnswers[question] ? 1 : 0);
    }, 0);

    setQuizSubmitted(true);
    setQuizScore(score);

    if (score === requiredQuestions.length) {
      setQuizError(null);
      if (!quizCompleted) {
        setQuizCompleted(true);
        handleModuleComplete();
      }
    } else {
      setQuizError("You need 100% to continue. Review the modules and try again.");
      setQuizCompleted(false);
      confettiTriggered.current = false;
    }
  };

  const module = course.modules[currentModule];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-6xl mt-20">
        <div className="mb-8">
          <button
            onClick={() => router.push(`/courses/${courseId}`)}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4"
          >
            ← Back to Course
          </button>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
            {course.title}
          </h1>
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600 dark:text-gray-400">
                Module {currentModule + 1} of {course.modules.length}
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {module.moduleNumber}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {module.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{module.duration}</p>
                </div>
              </div>

              {showCelebration ? (
                <div className="space-y-6 text-center py-8">
                  <div className="relative">
                    <Sparkles className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-yellow-100 dark:bg-yellow-900/20 animate-ping opacity-75"></div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    🎉 Quiz Completed!
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    Congratulations! You&apos;ve completed the course. Connect your wallet to save your progress and claim your NFT certificate.
                  </p>

                  {!isConnected ? (
                    <div className="border border-blue-200 dark:border-blue-800 rounded-xl p-6 bg-blue-50 dark:bg-blue-900/20 max-w-md mx-auto">
                      <div className="flex flex-col items-center gap-4">
                        <Wallet className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                        <div className="text-center">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                            Connect Wallet to Save Progress & Claim NFT
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Connect your account (Google or Web3 wallet) to save your progress and claim your NFT certificate.
                          </p>
                        </div>
                        <WalletConnectButton />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 max-w-md mx-auto">
                      <div className="border border-green-200 dark:border-green-800 rounded-xl p-6 bg-green-50 dark:bg-green-900/20">
                        <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Wallet Connected!
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          Your progress has been saved. Claim your NFT certificate now.
                        </p>
                      </div>
                      <Button
                        onClick={() => router.push(`/courses/${courseId}`)}
                        className="w-full rounded-xl bg-gray-900 hover:bg-gray-800"
                        size="lg"
                      >
                        <Award className="mr-2 w-5 h-5" />
                        Claim NFT Certificate
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              ) : isQuiz ? (
                <div className="space-y-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <h3 className="text-xl font-semibold mb-4">Quiz: Web3 Wallet Basics</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Test your knowledge before claiming your certificate.
                    </p>
                  </div>

                  {quizSubmitted && (
                    <div
                      className={`rounded-xl border p-4 ${
                        quizScore === 3
                          ? "border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-900/20"
                          : "border-red-200 bg-red-50 dark:border-red-700 dark:bg-red-900/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p
                          className={`text-sm font-semibold ${
                            quizScore === 3
                              ? "text-green-700 dark:text-green-200"
                              : "text-red-700 dark:text-red-200"
                          }`}
                        >
                          Score: {quizScore ?? 0}/3
                        </p>
                        {quizScore !== 3 && (
                          <button
                            onClick={() => {
                              setQuizSubmitted(false);
                              setQuizScore(null);
                              setQuizError(null);
                            }}
                            className="text-sm font-semibold text-blue-600 hover:text-blue-500"
                          >
                            Reset answers
                          </button>
                        )}
                      </div>
                      {quizError && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-200">
                          {quizError} Try again.
                        </p>
                      )}
                      {quizScore === 3 && (
                        <p className="mt-2 text-sm text-green-700 dark:text-green-200">
                          Perfect score! You&apos;re ready to continue.
                        </p>
                      )}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                      <p className="font-semibold mb-3">1. What is a non-custodial wallet?</p>
                      <div className="space-y-2">
                        {["You control your private keys", "A third party controls your keys", "A hardware wallet only", "A wallet on an exchange"].map((option, idx) => (
                          <label key={idx} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="q1"
                              value={option}
                              onChange={(e) => setQuizAnswers({ ...quizAnswers, 1: e.target.value })}
                              className="w-4 h-4"
                            />
                            <span className="text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                      <p className="font-semibold mb-3">2. Which wallet allows social login (Google, email)?</p>
                      <div className="space-y-2">
                        {["Reown", "MetaMask", "Base Wallet", "Binance Wallet"].map((option, idx) => (
                          <label key={idx} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="q2"
                              value={option}
                              onChange={(e) => setQuizAnswers({ ...quizAnswers, 2: e.target.value })}
                              className="w-4 h-4"
                            />
                            <span className="text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                      <p className="font-semibold mb-3">3. What should you NEVER share?</p>
                      <div className="space-y-2">
                        {["Your seed phrase", "Your wallet address", "Your public key", "Your transaction history"].map((option, idx) => (
                          <label key={idx} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="q3"
                              value={option}
                              onChange={(e) => setQuizAnswers({ ...quizAnswers, 3: e.target.value })}
                              className="w-4 h-4"
                            />
                            <span className="text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleQuizSubmit}
                    disabled={quizScore === 3}
                    className="w-full rounded-xl bg-gray-900 hover:bg-gray-800 disabled:bg-green-600 disabled:text-white disabled:cursor-not-allowed"
                    size="lg"
                  >
                    {quizScore === 3 ? "Quiz Completed" : "Submit Quiz"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="space-y-8">
                  {module.contentSections?.map((section: any, idx: number) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/40 p-6"
                    >
                      {section.heading && (
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                          {section.heading}
                        </h3>
                      )}
                      {section.body && (
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {section.body}
                        </p>
                      )}
                      {section.callout && (
                        <div className="mt-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-4 py-3 text-sm text-blue-900 dark:text-blue-200">
                          {section.callout}
                        </div>
                      )}
                      {section.bullets && Array.isArray(section.bullets) && (
                        <ul className="mt-4 space-y-2">
                          {section.bullets.map((item: string, bulletIdx: number) => (
                            <li key={bulletIdx} className="flex items-start gap-2">
                              <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500" />
                              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                <span dangerouslySetInnerHTML={{ __html: item }} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.resources && Array.isArray(section.resources) && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          {section.resources.map(
                            (
                              resource: { label: string; url: string },
                              resourceIdx: number
                            ) => (
                              <a
                                key={resourceIdx}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-300"
                              >
                                {resource.label}
                                <ArrowRight className="h-3.5 w-3.5" />
                              </a>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                    <div className="prose dark:prose-invert max-w-none">
                      <h3 className="text-xl font-semibold mb-4">What You&apos;ll Learn</h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                    <Button
                      onClick={handleModuleComplete}
                      disabled={completedModules.includes(currentModule)}
                      className="w-full rounded-xl bg-gray-900 hover:bg-gray-800 disabled:bg-green-600"
                      size="lg"
                    >
                      {completedModules.includes(currentModule) ? (
                        <>
                          <CheckCircle2 className="mr-2 w-4 h-4" />
                          Module Completed
                        </>
                      ) : (
                        <>
                          Mark Module Complete
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Course Modules
              </h3>
              <div className="space-y-2">
                {course.modules.map((mod, idx) => {
                  const isCurrent = idx === currentModule;
                  const isCompleted = completedModules.includes(idx);
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentModule(idx)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        isCurrent
                          ? "bg-gray-900 text-white"
                          : isCompleted
                          ? "bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-400"
                          : "bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 flex-shrink-0 opacity-50" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-semibold truncate ${isCurrent ? "text-white" : ""}`}>
                            {mod.title}
                          </p>
                          <p className={`text-xs ${isCurrent ? "text-white/80" : "text-gray-500"}`}>
                            {mod.duration}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {showCelebration && (
              <div className="border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 bg-yellow-50 dark:bg-yellow-900/20">
                <div className="text-center">
                  <Sparkles className="w-12 h-12 text-yellow-600 dark:text-yellow-400 mx-auto mb-4 animate-pulse" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Quiz Completed! 🎉
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {!isConnected ? "Connect wallet to claim NFT" : "Claim your NFT certificate"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

