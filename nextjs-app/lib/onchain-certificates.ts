export interface CertificateMetadata {
  courseId: string;
  courseTitle: string;
  recipientAddress: string;
  completionDate: string;
  ipfsHash: string;
  tokenId?: string;
  network: "polygon";
  issuer: "OpenX Academy";
  version: string;
}

export interface CourseProgress {
  courseId: string;
  completedModules: number;
  totalModules: number;
  progressPercentage: number;
  completedModuleIds: number[];
  certificateClaimed: boolean;
  certificateTokenId?: string;
  openRDTasksCompleted: number;
}

export const createCertificateMetadata = (
  courseId: string,
  courseTitle: string,
  recipientAddress: string,
  completionDate: string
): CertificateMetadata => {
  return {
    courseId,
    courseTitle,
    recipientAddress,
    completionDate,
    ipfsHash: "",
    network: "polygon",
    issuer: "OpenX Academy",
    version: "1.0.0",
  };
};

export const checkCourseCompletion = (
  progress: CourseProgress,
  requiresProject: boolean = false
): boolean => {
  const allModulesCompleted = progress.completedModules === progress.totalModules;
  const progressComplete = progress.progressPercentage === 100;
  
  if (requiresProject) {
    return allModulesCompleted && progressComplete && progress.openRDTasksCompleted > 0;
  }
  
  return allModulesCompleted && progressComplete;
};

export const getCertificateVerificationUrl = (tokenId: string, network: string = "polygon"): string => {
  const baseUrl = process.env.NEXT_PUBLIC_VERIFICATION_BASE_URL || "https://openx.academy";
  return `${baseUrl}/verify/${network}/${tokenId}`;
};

export const getOpenRDTaskUrl = (courseId: string): string => {
  const baseUrl = "https://openrd.openmesh.network";
  const courseTaskMap: Record<string, string> = {
    "blockchain-fundamentals": "blockchain-basics",
    "base-blockchain": "base-development",
    "decentralized-ai": "ai-web3",
    "openxai-platform": "openxai",
    "openmesh-infrastructure": "openmesh",
  };
  
  const taskTag = courseTaskMap[courseId] || courseId;
  return `${baseUrl}/tasks?tags=${taskTag}`;
};

const isTestnet = process.env.NEXT_PUBLIC_NETWORK === "testnet";

export const OPENRD_CONTRACTS = {
  tasks: process.env.NEXT_PUBLIC_OPENRD_TASKS_CONTRACT || (isTestnet ? "0xDdb23dacd41908C4eAE03982B1c6529252A56b62" : "0xDdb23dacd41908C4eAE03982B1c6529252A56b62"),
  rfps: process.env.NEXT_PUBLIC_OPENRD_RFPS_CONTRACT || "",
  governance: process.env.NEXT_PUBLIC_OPENRD_GOVERNANCE_CONTRACT || "",
  network: isTestnet ? "sepolia" : (process.env.NEXT_PUBLIC_OPENRD_NETWORK || "polygon"),
} as const;

export { getModuleTasksForCourse } from "./module-task-mapping";
import { getModuleTasksForCourse } from "./module-task-mapping";

export const checkOpenRDTaskCompletion = async (
  userAddress: string,
  courseId: string
): Promise<{ completed: boolean; taskCount: number; completedModules: number[] }> => {
  const taskIds = getModuleTasksForCourse(courseId);
  
  if (taskIds.length === 0) {
    return { completed: false, taskCount: 0, completedModules: [] };
  }

  const { getTasks, isTaskCompletedByUser } = await import("./openrd-tasks");
  const tasks = await getTasks(taskIds);
  
  const completedModules: number[] = [];
  let completedCount = 0;

  tasks.forEach((task, index) => {
    if (isTaskCompletedByUser(task, userAddress)) {
      completedModules.push(index + 1);
      completedCount++;
    }
  });

  return {
    completed: completedCount === taskIds.length,
    taskCount: completedCount,
    completedModules,
  };
};

export const getUserCertificates = async (
  userAddress: string
): Promise<CertificateMetadata[]> => {
  return [];
};

