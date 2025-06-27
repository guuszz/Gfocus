import { create } from 'zustand';
import { Task, Priority, Status } from '../types';
import { persist } from 'zustand/middleware';

interface TaskState {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'aiEstimate'>) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  reorderTasks: (tasks: Task[]) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (taskData) => {
        const task: Task = {
          ...taskData,
          id: crypto.randomUUID(),
          createdAt: new Date(),
          aiEstimate: calculateAIPriority(taskData),
        };
        set((state) => ({ tasks: [...state.tasks, task] }));
      },
      updateTask: (id, updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      reorderTasks: (tasks) => set({ tasks }),
    }),
    {
      name: 'gfocus-tasks',
    }
  )
);

function calculateAIPriority(task: Omit<Task, 'id' | 'createdAt' | 'aiEstimate'>): number {
  let score = 0;

  // Check for urgency keywords
  const urgentKeywords = ['urgent', 'asap', 'immediately', 'today', 'tomorrow'];
  if (urgentKeywords.some(keyword => 
    task.title.toLowerCase().includes(keyword) || 
    task.description.toLowerCase().includes(keyword)
  )) {
    score += 30;
  }

  // Check due date proximity
  const daysUntilDue = Math.ceil((task.dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  if (daysUntilDue <= 1) score += 40;
  else if (daysUntilDue <= 3) score += 30;
  else if (daysUntilDue <= 7) score += 20;

  // Check description complexity
  const words = task.description.split(/\s+/).length;
  if (words > 100) score += 20;
  else if (words > 50) score += 10;

  // Priority weight
  const priorityScores: Record<Priority, number> = {
    urgent: 40,
    high: 30,
    medium: 20,
    low: 10,
  };
  score += priorityScores[task.priority];

  return Math.min(100, score);
}