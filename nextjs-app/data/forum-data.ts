export type ForumThread = {
  title: string;
  replies: number;
  views: number;
  lastActive: string;
};

export type ForumCategory = {
  slug: string;
  name: string;
  description: string;
  topicCount: number;
  accent: string;
  threads: ForumThread[];
  highlights?: {
    label: string;
    value: string | number;
  }[];
};

export const forumCategories: ForumCategory[] = [
  {
    slug: "hack-node-australia",
    name: "Hack Node Australia",
    description:
      "Welcome to the OpenxAI community forum category about Hack Node Australia!",
    topicCount: 8,
    accent: "from-blue-500/20 to-blue-500/5",
    threads: [
      {
        title: "How to Win the OpenxAI Hackathon: A Step-by-Step Guide",
        replies: 26,
        views: 1840,
        lastActive: "Jul 23",
      },
      {
        title: "Workshop, Lecture, and Mentorship Schedule",
        replies: 18,
        views: 960,
        lastActive: "Jul 22",
      },
      {
        title: "Hack Node Rules & FAQ",
        replies: 12,
        views: 1340,
        lastActive: "Jul 20",
      },
    ],
    highlights: [
      { label: "New this month", value: "+4" },
      { label: "Active contributors", value: 18 },
      { label: "Replies this week", value: 39 },
      { label: "Top views", value: "1,840" },
    ],
  },
  {
    slug: "global-accelerator",
    name: "Global Accelerator",
    description:
      "Updates and coordination hub for the OpenxAI Global Accelerator program.",
    topicCount: 0,
    accent: "from-indigo-500/20 to-indigo-500/5",
    threads: [],
    highlights: [
      { label: "New this month", value: "+1" },
      { label: "Active contributors", value: 3 },
      { label: "Replies this week", value: 0 },
      { label: "Top views", value: "—" },
    ],
  },
  {
    slug: "jobs",
    name: "Jobs",
    description:
      "Welcome to our OpenxAI Community jobs board. Share and discover contributor roles.",
    topicCount: 42,
    accent: "from-amber-500/20 to-amber-500/5",
    threads: [
      {
        title: "Junior Software Engineer",
        replies: 54,
        views: 4820,
        lastActive: "Jul 20",
      },
      {
        title: "OpenxAI Writer Program",
        replies: 33,
        views: 3560,
        lastActive: "Sep 30",
      },
      {
        title: "Community Manager (LatAm)",
        replies: 21,
        views: 1680,
        lastActive: "Aug 18",
      },
    ],
    highlights: [
      { label: "New this month", value: "+12" },
      { label: "Active contributors", value: 64 },
      { label: "Replies this week", value: 45 },
      { label: "Top views", value: "4,820" },
    ],
  },
  {
    slug: "general-chat",
    name: "General Chat",
    description:
      "Here you can talk about topics that don’t fall into other categories.",
    topicCount: 20,
    accent: "from-emerald-500/20 to-emerald-500/5",
    threads: [
      {
        title: "Introduce Yourself",
        replies: 67,
        views: 6230,
        lastActive: "Oct 12",
      },
      {
        title: "OpenxAI Global Accelerator Program",
        replies: 44,
        views: 2870,
        lastActive: "Jul 15",
      },
      {
        title: "Weekly wins & shoutouts",
        replies: 19,
        views: 1420,
        lastActive: "Nov 5",
      },
    ],
    highlights: [
      { label: "New this month", value: "+6" },
      { label: "Active contributors", value: 78 },
      { label: "Replies this week", value: 58 },
      { label: "Top views", value: "6,230" },
    ],
  },
  {
    slug: "technical-discussions",
    name: "Technical Discussions",
    description:
      "Development updates, integration help, bug reports, and best practices for the OpenxAI stack.",
    topicCount: 10,
    accent: "from-sky-500/20 to-sky-500/5",
    threads: [
      {
        title: "AppKit wallet connection timing out",
        replies: 15,
        views: 980,
        lastActive: "Nov 10",
      },
      {
        title: "Best way to structure viem hooks",
        replies: 9,
        views: 720,
        lastActive: "Nov 3",
      },
      {
        title: "Supabase auth errors after deploy",
        replies: 7,
        views: 540,
        lastActive: "Oct 29",
      },
    ],
    highlights: [
      { label: "New this month", value: "+3" },
      { label: "Active contributors", value: 24 },
      { label: "Replies this week", value: 27 },
      { label: "Top views", value: "980" },
    ],
  },
  {
    slug: "openxai-vision",
    name: "OpenxAI Vision",
    description:
      "Strategic discussions about the mission, roadmap, and long-term direction of OpenxAI.",
    topicCount: 4,
    accent: "from-purple-500/20 to-purple-500/5",
    threads: [
      {
        title: "Community governance priorities",
        replies: 24,
        views: 1980,
        lastActive: "Sep 2",
      },
      {
        title: "Roadmap feedback: 2025 outlook",
        replies: 11,
        views: 1240,
        lastActive: "Aug 15",
      },
    ],
    highlights: [
      { label: "New this month", value: "+1" },
      { label: "Active contributors", value: 12 },
      { label: "Replies this week", value: 9 },
      { label: "Top views", value: "1,980" },
    ],
  },
  {
    slug: "proposals",
    name: "Proposals",
    description:
      "Submit ideas for improving OpenxAI in any way. All proposals are welcome!",
    topicCount: 0,
    accent: "from-rose-500/20 to-rose-500/5",
    threads: [],
    highlights: [
      { label: "New this month", value: "+0" },
      { label: "Active contributors", value: 2 },
      { label: "Replies this week", value: 0 },
      { label: "Top views", value: "—" },
    ],
  },
  {
    slug: "projects",
    name: "Projects",
    description:
      "Discuss projects and protocols that benefit and interact with OpenxAI.",
    topicCount: 0,
    accent: "from-fuchsia-500/20 to-fuchsia-500/5",
    threads: [],
    highlights: [
      { label: "New this month", value: "+0" },
      { label: "Active contributors", value: 1 },
      { label: "Replies this week", value: 0 },
      { label: "Top views", value: "—" },
    ],
  },
];


