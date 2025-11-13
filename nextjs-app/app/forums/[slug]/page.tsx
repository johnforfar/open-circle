"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/academy/Footer";
import { forumCategories } from "@/data/forum-data";
import {
  ArrowLeft,
  ArrowRight,
  Flame,
  MessageCircle,
  Users,
  Clock,
  Eye,
} from "lucide-react";

type ForumCategoryPageProps = {
  params: {
    slug: string;
  };
};

export default function ForumCategoryPage({ params }: ForumCategoryPageProps) {
  const category = forumCategories.find((item) => item.slug === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-24">
        <section className="border-b border-gray-200 bg-gradient-to-br from-gray-50 via-white to-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <Link
                href="/forums"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500"
              >
                <ArrowLeft className="h-4 w-4" />
                All forums
              </Link>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-700">
                <MessageCircle className="h-4 w-4" />
                {category.topicCount} topics
              </div>
              <h1 className="mt-4 text-4xl font-bold text-gray-900">{category.name}</h1>
              <p className="mt-4 max-w-3xl text-lg text-gray-600">{category.description}</p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <Users className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">Active contributors</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {category.highlights?.find((item) => item.label === "Active contributors")?.value ??
                        category.highlights?.find((item) => item.label === "Active members")?.value ??
                        0}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <MessageCircle className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">Replies this week</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {category.highlights?.find((item) => item.label === "Replies this week")?.value ?? "0"}
                    </p>
                  </div>
                </div>
                <Link
                  href="https://community.openxai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-200 hover:bg-blue-100"
                >
                  View on Discourse
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          {category.threads.length > 0 ? (
            <div className="space-y-4">
              {category.threads.map((thread) => (
                <article
                  key={thread.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                        <Flame className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                          {thread.title}
                        </h2>
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <span className="inline-flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <strong className="font-semibold text-gray-900">{thread.replies}</strong> replies
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <strong className="font-semibold text-gray-900">{thread.views.toLocaleString()}</strong>{" "}
                            views
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Last active {thread.lastActive}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="https://community.openxai.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-400 hover:text-blue-600"
                    >
                      Join discussion
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">No threads yet</h2>
              <p className="mt-3 text-gray-600">
                Kick off the conversation by posting the first topic on our Discourse community.
              </p>
              <Link
                href="https://community.openxai.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Start a thread
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}


