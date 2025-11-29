import { db } from "../lib/db";
import { tasks } from "../lib/db/schema";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { desc } from "drizzle-orm";

export default async function Home() {
  const allTasks = await db.select().from(tasks).orderBy(desc(tasks.createdAt));

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100">
          Úkoly
        </h1>
        <TaskForm />
        <TaskList tasks={allTasks} />
      </div>
    </div>
  );
}
