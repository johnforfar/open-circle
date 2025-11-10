export interface ModuleTaskMapping {
  courseId: string;
  moduleNumber: number;
  taskId: number;
}

const moduleTaskMappings: ModuleTaskMapping[] = [];

export function setModuleTaskMapping(
  courseId: string,
  moduleNumber: number,
  taskId: number
): void {
  const existing = moduleTaskMappings.findIndex(
    (m) => m.courseId === courseId && m.moduleNumber === moduleNumber
  );
  
  if (existing >= 0) {
    moduleTaskMappings[existing].taskId = taskId;
  } else {
    moduleTaskMappings.push({ courseId, moduleNumber, taskId });
  }
}

export function getModuleTaskId(courseId: string, moduleNumber: number): number | null {
  const mapping = moduleTaskMappings.find(
    (m) => m.courseId === courseId && m.moduleNumber === moduleNumber
  );
  return mapping?.taskId ?? null;
}

export function getModuleTasksForCourse(courseId: string): number[] {
  return moduleTaskMappings
    .filter((m) => m.courseId === courseId)
    .map((m) => m.taskId)
    .sort((a, b) => a - b);
}

export function getAllMappings(): ModuleTaskMapping[] {
  return [...moduleTaskMappings];
}

