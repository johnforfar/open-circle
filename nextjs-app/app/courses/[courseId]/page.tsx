import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/academy/Footer";
import CourseProgressClient from "@/components/course-progress-client";
import { curriculumData } from "@/templates/courses/openxai-openmesh-curriculum";
import { Award, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

interface CourseDetailPageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { courseId } = await params;
  const course = curriculumData.courses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-6xl mt-20">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-900 mb-4">
            <span className="text-gray-900 dark:text-white">{course.level}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900 dark:text-white">
            {course.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {course.duration}
            </span>
            {course.prerequisites && (
              <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                Requires: {course.prerequisites.length} course{course.prerequisites.length > 1 ? 's' : ''}
              </span>
            )}
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              Onchain Certificate
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Course Modules
              </h2>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {module.moduleNumber}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {module.title}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-500">
                            {module.duration}
                          </span>
                        </div>
                        <ul className="space-y-1 mt-2">
                          {module.topics.slice(0, 3).map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                            >
                              <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                          {module.topics.length > 3 && (
                            <li className="text-xs text-gray-500 dark:text-gray-500">
                              +{module.topics.length - 3} more topics
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {course.learningOutcomes && (
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Learning Outcomes
                </h2>
                <ul className="space-y-2">
                  {course.learningOutcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.practicalProjects && course.practicalProjects.length > 0 && (
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Practical Projects
                </h2>
                <div className="space-y-3">
                  {course.practicalProjects.map((project, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                    >
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
              <Link
                href={`/courses/${course.id}/learn`}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors w-full justify-center"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <CourseProgressClient
              courseId={course.id}
              courseTitle={course.title}
              totalModules={course.modules.length}
            />

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                OpenR&D Integration
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Complete tasks on OpenR&D to apply your skills and earn rewards.
              </p>
              <a
                href={`https://openrd.openmesh.network/tasks?tags=${course.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <ExternalLink className="w-4 h-4" />
                View OpenR&D Tasks
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

