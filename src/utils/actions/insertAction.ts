'use server';

import { db } from "@/src/lib/db";
import { tasks } from "@/src/lib/db/schema";
import { revalidatePath } from "next/cache";

/**
 * Server action to add a new task to database
 * 
 * @param formData 
 * @returns 
 */
export async function addTask(formData: FormData) {
    const title: string = formData.get("title") ? formData.get("title") as string : "";

    if (!title || title.trim() === "") {
        throw new Error("Title is required");
    }

    await db.insert(tasks).values({
        title: title.toString(),
    });

    revalidatePath("/");
    return { success: true };
}