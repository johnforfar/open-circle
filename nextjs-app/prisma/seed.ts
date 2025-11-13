import { PrismaClient } from "@prisma/client";
import { curriculumData } from "../templates/courses/openxai-openmesh-curriculum";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding curriculum data...");

  // Seed courses and modules
  for (const courseData of curriculumData.courses) {
    const course = await prisma.course.upsert({
      where: { courseId: courseData.id },
      update: {
        title: courseData.title,
        description: courseData.description,
        duration: courseData.duration,
        level: courseData.level,
        totalModules: courseData.modules.length,
        prerequisites: courseData.prerequisites || [],
        learningOutcomes: courseData.learningOutcomes || [],
        practicalProjects: courseData.practicalProjects || [],
      },
      create: {
        courseId: courseData.id,
        title: courseData.title,
        description: courseData.description,
        duration: courseData.duration,
        level: courseData.level,
        totalModules: courseData.modules.length,
        prerequisites: courseData.prerequisites || [],
        learningOutcomes: courseData.learningOutcomes || [],
        practicalProjects: courseData.practicalProjects || [],
      },
    });

    // Seed modules for this course
    for (const moduleData of courseData.modules) {
      await prisma.module.upsert({
        where: {
          courseId_moduleNumber: {
            courseId: course.id,
            moduleNumber: moduleData.moduleNumber,
          },
        },
        update: {
          title: moduleData.title,
          duration: moduleData.duration,
          topics: moduleData.topics,
        },
        create: {
          courseId: course.id,
          moduleNumber: moduleData.moduleNumber,
          title: moduleData.title,
          duration: moduleData.duration,
          topics: moduleData.topics,
        },
      });
    }

    console.log(`✅ Seeded course: ${courseData.title} (${courseData.modules.length} modules)`);
  }

  // Seed default forums
  console.log("🌱 Seeding forum categories...");
  
  const forums = [
    {
      name: "General Discussion",
      description: "General discussions about Web3, AI, and the OpenX Academy",
      slug: "general",
      icon: "💬",
      order: 1,
    },
    {
      name: "Course Help",
      description: "Get help with course content, assignments, and projects",
      slug: "course-help",
      icon: "📚",
      order: 2,
    },
    {
      name: "Projects & Showcase",
      description: "Share your projects, get feedback, and showcase your work",
      slug: "projects",
      icon: "🚀",
      order: 3,
    },
    {
      name: "Technical Support",
      description: "Technical questions about wallets, smart contracts, and development",
      slug: "technical-support",
      icon: "🔧",
      order: 4,
    },
    {
      name: "Community & Events",
      description: "Community announcements, events, and networking",
      slug: "community",
      icon: "🎉",
      order: 5,
    },
    {
      name: "Feedback & Suggestions",
      description: "Share feedback and suggestions to improve the platform",
      slug: "feedback",
      icon: "💡",
      order: 6,
    },
  ];

  for (const forumData of forums) {
    await prisma.forum.upsert({
      where: { slug: forumData.slug },
      update: {
        name: forumData.name,
        description: forumData.description,
        icon: forumData.icon,
        order: forumData.order,
      },
      create: forumData,
    });
    console.log(`✅ Seeded forum: ${forumData.name}`);
  }

  console.log("✨ Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

