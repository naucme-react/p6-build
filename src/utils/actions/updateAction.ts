'use server';

import { db } from "@/src/lib/db";
import { tasks } from "@/src/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

/**
 * Updates completed field in database tasks table where id matches
 * 
 * @param id 
 * @param completed 
 * @returns 
 */
export default async function updateTask(id: number, completed: boolean) {
    await db.update(tasks).set({
        completed,
    }).where(eq(tasks.id, id))

    revalidatePath("/");
    return { success: true };
}