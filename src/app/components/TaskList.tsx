'use client';

import { toggleTask } from '../actions';

type Task = {
  id: number;
  title: string;
  description: string | null;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type TaskListProps = {
  tasks: Task[];
};

export function TaskList({ tasks }: TaskListProps) {
  async function handleToggle(id: number, completed: boolean) {
    await toggleTask(id, completed);
  }

  if (tasks.length === 0) {
    return (
      <p className="text-zinc-500 dark:text-zinc-400 text-center">
        Žádné úkoly. Přidejte první úkol!
      </p>
    );
  }

  return (
    <ul className="w-full max-w-md space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => handleToggle(task.id, task.completed)}
          className={`
            px-4 py-3 rounded-lg border cursor-pointer transition-all
            ${task.completed
              ? 'bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 line-through text-zinc-500 dark:text-zinc-400'
              : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600'
            }
          `}
        >
          <div className="flex items-center gap-3">
            <div
              className={`
                w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0
                ${task.completed
                  ? 'bg-zinc-900 dark:bg-zinc-100 border-zinc-900 dark:border-zinc-100'
                  : 'border-zinc-300 dark:border-zinc-600'
                }
              `}
            >
              {task.completed && (
                <svg
                  className="w-3 h-3 text-white dark:text-zinc-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <span className="flex-1">{task.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

