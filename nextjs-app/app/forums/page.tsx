"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/academy/Footer";
import {
  MessageCircle,
  Users,
  Flame,
  Calendar,
  Tag,
  ArrowRight,
  Clock,
  Trophy,
} from "lucide-react";
import { forumCategories } from "@/data/forum-data";

const latestDiscussions = [
  {
    title: "Wallet onboarding UX improvements",
    author: "samantha.eth",
    category: "Technical Support",
    replies: 18,
    lastActive: "2h ago",
  },
  {
    title: "OpenxAI Writer Program - call for contributors",
    author: "admin",
    category: "General Chat",
    replies: 42,
    lastActive: "Today",
  },
  {
    title: "How to prepare for the Global Accelerator demo day",
    author: "daniel",
    category: "Global Accelerator",
    replies: 11,
    lastActive: "5h ago",
  },
  {
    title: "Deploying NFT certificates with viem + Supabase",
    author: "noah",
    category: "Showcase & Feedback",
    replies: 9,
    lastActive: "Yesterday",
  },
];

const upcomingEvents = [
  {
    name: "Hack Node AMA: Winning strategies",
    date: "Nov 15 • 7:00 PM UTC",
    host: "OpenxAI Core Team",
  },
  {
    name: "Technical Office Hours: AppKit & viem",
    date: "Nov 18 • 4:00 PM UTC",
    host: "DevRel Guild",
  },
  {
    name: "Community Retro & Feedback Session",
    date: "Nov 22 • 6:00 PM UTC",
    host: "Community Council",
  },
];

export default function ForumsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-900 text-white">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-blue-400 blur-3xl" />
            <div className="absolute -right-16 bottom-12 h-64 w-64 rounded-full bg-purple-400 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-24">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white/80 backdrop-blur">
                  <MessageCircle className="h-4 w-4" />
                  Community Prototype
                </span>
                <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
                  Forums for learners building the decentralized future.
                </h1>
                <p className="mt-4 text-lg text-white/80 sm:text-xl">
                  Explore how the OpenxAI community organizes categories, tracks live
                  discussions, and highlights events. This mock follows current
                  Academy styling before the full integration.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="https://community.openxai.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Visit Live Forums
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/community"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/10"
                  >
                    Community Overview
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid w-full max-w-sm grid-cols-2 gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div>
                  <p className="text-sm text-white/70">Members</p>
                  <p className="text-3xl font-bold">3,200+</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Topics</p>
                  <p className="text-3xl font-bold">84</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Active Today</p>
                  <p className="text-3xl font-bold">48</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Countries</p>
                  <p className="text-3xl font-bold">38</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Forum categories</h2>
              <p className="mt-2 text-gray-500">
                Structured similar to community.openxai.org so we can align content
                migration with our Prisma models.
              </p>
            </div>
            <div className="flex items-center gap-6 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total members</p>
                  <p className="text-lg font-semibold text-gray-900">3,214</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/10">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Monthly replies</p>
                  <p className="text-lg font-semibold text-gray-900">6,480</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {forumCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/forums/${category.slug}`}
                className="group relative block overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl"
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${category.accent}`}
                />
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                        <Tag className="h-4 w-4 text-gray-500" />
                        {category.topicCount} topics
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {category.description}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600 sm:grid-cols-4">
                    {category.highlights?.map((highlight) => (
                      <div
                        key={highlight.label}
                        className="rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-center shadow-sm"
                      >
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          {highlight.label}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">{highlight.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm">
                    {category.threads.length > 0 ? (
                      <div className="divide-y divide-gray-100">
                        {category.threads.map((thread) => (
                          <div key={thread.title} className="px-5 py-4">
                            <div className="flex items-start gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                                <Flame className="h-4 w-4" />
                              </div>
                              <div className="flex-1">
                                <p className="font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                                  {thread.title}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-4 text-xs uppercase tracking-wide text-gray-400">
                                  <span>
                                    Replies{" "}
                                    <span className="ml-1 text-sm font-semibold text-gray-900">
                                      {thread.replies.toLocaleString()}
                                    </span>
                                  </span>
                                  <span>
                                    Views{" "}
                                    <span className="ml-1 text-sm font-semibold text-gray-900">
                                      {thread.views.toLocaleString()}
                                    </span>
                                  </span>
                                  <span>
                                    Activity{" "}
                                    <span className="ml-1 text-sm font-semibold text-gray-900">
                                      {thread.lastActive}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-6 text-sm text-gray-500">
                        No threads yet. Be the first to start a conversation in {category.name}.
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Latest discussions</h2>
                <Link
                  href="https://community.openxai.org/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-500"
                >
                  View all
                </Link>
              </div>
              <div className="mt-6 space-y-4">
                {latestDiscussions.map((topic) => (
                  <div
                    key={topic.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500/30 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {topic.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                            <MessageCircle className="h-3.5 w-3.5" />
                            {topic.category}
                          </span>
                          <span>By {topic.author}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {topic.lastActive}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          {topic.replies}
                        </p>
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          replies
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full max-w-sm space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Upcoming live sessions
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Directly pulled from Discourse events for planning integration.
                </p>
                <div className="mt-6 space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.name}
                      className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3"
                    >
                      <div className="flex items-start gap-3">
                        <Calendar className="mt-1 h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">{event.name}</p>
                          <p className="text-sm text-gray-500">{event.date}</p>
                          <p className="text-xs text-gray-400">Hosted by {event.host}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Contributor spotlight
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Example leaderboard to highlight weekly impact.
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    { name: "sarah.builds", metric: "18 helpful replies" },
                    { name: "devinbase", metric: "3 tutorials published" },
                    { name: "ai-nodes", metric: "Launched 2 cohort projects" },
                  ].map((contributor) => (
                    <div
                      key={contributor.name}
                      className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">
                          @{contributor.name}
                        </p>
                        <p className="text-xs text-gray-500">{contributor.metric}</p>
                      </div>
                      <Trophy className="h-5 w-5 text-amber-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 text-white">
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.35),transparent_60%)] lg:block" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold">
                  Ready to merge Discourse threads into the Academy?
                </h2>
                <p className="mt-3 text-white/70">
                  This mock shows how forum data from community.openxai.org could live
                  inside the product. Next step: import topics via Prisma and connect
                  them to user progress.
                </p>
              </div>
              <Link
                href="/courses/getting-started-web3/learn"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Return to Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

