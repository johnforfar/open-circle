import { CertificateMetadata, CourseProgress, getModuleTasksForCourse } from "./onchain-certificates";
import { getTasks, isTaskCompletedByUser } from "./openrd-tasks";

export async function getUserCourseProgress(
  userAddress: string,
  courseId: string,
  totalModules: number
): Promise<CourseProgress> {
  const { completedModules, completedModuleIds } = await getModuleCompletion(
    userAddress,
    courseId
  );

  const certificates = await getUserCertificates(userAddress);
  const courseCertificate = certificates.find(c => c.courseId === courseId);

  const { checkOpenRDTaskCompletion } = await import("./onchain-certificates");
  const result = await checkOpenRDTaskCompletion(userAddress, courseId);
  const taskCount = result.taskCount;

  return {
    courseId,
    completedModules,
    totalModules,
    progressPercentage: totalModules > 0 ? (completedModules / totalModules) * 100 : 0,
    completedModuleIds,
    certificateClaimed: !!courseCertificate,
    certificateTokenId: courseCertificate?.tokenId,
    openRDTasksCompleted: taskCount,
  };
}

async function getModuleCompletion(
  userAddress: string,
  courseId: string
): Promise<{ completedModules: number; completedModuleIds: number[] }> {
  const taskIds = getModuleTasksForCourse(courseId);
  
  if (taskIds.length === 0) {
    return { completedModules: 0, completedModuleIds: [] };
  }

  const tasks = await getTasks(taskIds);
  const completedModuleIds: number[] = [];

  tasks.forEach((task, index) => {
    if (isTaskCompletedByUser(task, userAddress)) {
      completedModuleIds.push(index + 1);
    }
  });

  return {
    completedModules: completedModuleIds.length,
    completedModuleIds,
  };
}

async function getUserCertificates(
  userAddress: string
): Promise<CertificateMetadata[]> {
  return [];
}

export async function getAllUserProgress(
  userAddress: string,
  courseIds: string[]
): Promise<Record<string, CourseProgress>> {
  const progressPromises = courseIds.map(courseId =>
    getUserCourseProgress(userAddress, courseId, getTotalModules(courseId))
  );
  
  const progressArray = await Promise.all(progressPromises);
  
  const progress: Record<string, CourseProgress> = {};
  courseIds.forEach((courseId, index) => {
    progress[courseId] = progressArray[index];
  });
  
  return progress;
}

function getTotalModules(courseId: string): number {
  return 0;
}

