'use server';

import { db } from "../lib/db";
import { tasks } from "../lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
  const title = formData.get('title') as string;
  
  if (!title || title.trim() === '') {
    return { error: 'Title is required' };
  }

  await db.insert(tasks).values({
    title: title.trim(),
  });

  revalidatePath('/');
  return { success: true };
}

export async function toggleTask(id: number, completed: boolean) {
  await db
    .update(tasks)
    .set({ completed: !completed, updatedAt: new Date() })
    .where(eq(tasks.id, id));

  revalidatePath('/');
}

