import { createPublicClient, http } from "viem";
import { polygon, polygonAmoy, sepolia } from "viem/chains";
import { OPENRD_CONTRACTS } from "./onchain-certificates";

export interface OpenRDTask {
  taskId: number;
  metadata: string;
  state: number;
  executorApplication: number;
  applications: Array<{
    applicant: string;
    nativeReward: bigint;
    reward: bigint;
  }>;
}

const TASKS_ABI = [
  {
    inputs: [{ name: "_taskId", type: "uint256" }],
    name: "getTask",
    outputs: [
      {
        components: [
          { name: "metadata", type: "string" },
          { name: "state", type: "uint8" },
          { name: "executorApplication", type: "uint8" },
          {
            name: "applications",
            type: "tuple[]",
            components: [
              { name: "applicant", type: "address" },
              { name: "nativeReward", type: "uint256" },
              { name: "reward", type: "uint256" },
            ],
          },
        ],
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "_taskIds", type: "uint256[]" }],
    name: "getTasks",
    outputs: [
      {
        components: [
          { name: "metadata", type: "string" },
          { name: "state", type: "uint8" },
          { name: "executorApplication", type: "uint8" },
          {
            name: "applications",
            type: "tuple[]",
            components: [
              { name: "applicant", type: "address" },
              { name: "nativeReward", type: "uint256" },
              { name: "reward", type: "uint256" },
            ],
          },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export enum TaskState {
  Open = 0,
  Taken = 1,
  Closed = 2,
}

const getChain = () => {
  const network = OPENRD_CONTRACTS.network.toLowerCase();
  if (network === "testnet" || network === "sepolia") {
    return sepolia;
  }
  if (network === "amoy" || network === "polygon-amoy") {
    return polygonAmoy;
  }
  return polygon;
};

const publicClient = createPublicClient({
  chain: getChain(),
  transport: http(),
});

export async function getTask(taskId: number): Promise<OpenRDTask | null> {
  if (!OPENRD_CONTRACTS.tasks) {
    return null;
  }

  try {
    const result = await publicClient.readContract({
      address: OPENRD_CONTRACTS.tasks as `0x${string}`,
      abi: TASKS_ABI,
      functionName: "getTask",
      args: [BigInt(taskId)],
    });

    return {
      taskId,
      metadata: result.metadata,
      state: result.state,
      executorApplication: result.executorApplication,
      applications: result.applications.map((app: any) => ({
        applicant: app.applicant,
        nativeReward: app.nativeReward,
        reward: app.reward,
      })),
    };
  } catch (error) {
    console.error("Error fetching task:", error);
    return null;
  }
}

export async function getTasks(taskIds: number[]): Promise<OpenRDTask[]> {
  if (!OPENRD_CONTRACTS.tasks || taskIds.length === 0) {
    return [];
  }

  try {
    const result = await publicClient.readContract({
      address: OPENRD_CONTRACTS.tasks as `0x${string}`,
      abi: TASKS_ABI,
      functionName: "getTasks",
      args: [taskIds.map((id) => BigInt(id))],
    });

    return result.map((task: any, index: number) => ({
      taskId: taskIds[index],
      metadata: task.metadata,
      state: task.state,
      executorApplication: task.executorApplication,
      applications: task.applications.map((app: any) => ({
        applicant: app.applicant,
        nativeReward: app.nativeReward,
        reward: app.reward,
      })),
    }));
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

export function isTaskCompletedByUser(task: OpenRDTask, userAddress: string): boolean {
  if (task.state !== TaskState.Closed) {
    return false;
  }

  if (task.executorApplication >= task.applications.length) {
    return false;
  }

  const executor = task.applications[task.executorApplication];
  return executor.applicant.toLowerCase() === userAddress.toLowerCase();
}

