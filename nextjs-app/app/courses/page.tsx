import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { curriculumData } from "@/templates/courses/openxai-openmesh-curriculum";
import { Award, ExternalLink, ArrowRight } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-6xl mt-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-900 mb-6">
            <span className="text-gray-900 dark:text-white">Innovative Learning</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900 dark:text-white">
            Learn by Building on OpenR&D
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto">
            Master OpenxAI & Openmesh technologies. Earn onchain certificates on Polygon. Build real projects. Get real rewards.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Award className="w-4 h-4 inline mr-2" />
              Onchain Certificates
            </span>
            <a
              href="https://openrd.openmesh.network"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              OpenR&D Integration
            </a>
          </div>
        </div>

        {/* Courses List */}
        <div className="space-y-8">
          {curriculumData.courses.map((course, index) => (
            <div
              key={course.id}
              className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 mb-12"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">#{index + 1}</span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </h2>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      {course.level}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      {course.duration}
                    </span>
                    {course.prerequisites && (
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        Requires: {course.prerequisites.length} course{course.prerequisites.length > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Modules - Collapsed by default */}
              <div className="mt-6">
                <div className="grid gap-3 md:grid-cols-4">
                  {course.modules.map((module, moduleIndex) => (
                    <div
                      key={moduleIndex}
                      className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          M{module.moduleNumber}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          {module.duration}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{module.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes & Projects - Compact */}
              <div className="mt-6 flex flex-wrap gap-4">
                {course.learningOutcomes && course.learningOutcomes.slice(0, 3).map((outcome, outcomeIndex) => (
                  <span key={outcomeIndex} className="text-xs text-gray-600 dark:text-gray-400">
                    ✓ {outcome.split('.')[0]}
                  </span>
                ))}
                {course.practicalProjects && course.practicalProjects.slice(0, 2).map((project, projectIndex) => (
                  <span
                    key={projectIndex}
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  >
                    {project}
                  </span>
                ))}
              </div>

              {/* Format */}
              {course.format && (
                <div className="mt-6">
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    Format: <span className="font-semibold text-gray-900 dark:text-white">{course.format}</span>
                  </span>
                </div>
              )}

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <span>View Course Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}

