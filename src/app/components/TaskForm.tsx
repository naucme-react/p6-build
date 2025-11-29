'use client';

import { addTask } from '../actions';
import { useRef } from 'react';

export function TaskForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    await addTask(formData);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={handleSubmit} className="w-full max-w-md">
      <div className="flex gap-2">
        <input
          type="text"
          name="title"
          placeholder="Přidat úkol..."
          required
          className="flex-1 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
        >
          Přidat
        </button>
      </div>
    </form>
  );
}

