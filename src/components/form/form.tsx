'use client'

import { addTask } from "@/src/utils/actions/insertAction";
import { useRef } from "react"

const Form = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
        await addTask(formData)
        formRef.current?.reset();
    }

    return <form ref={formRef} action={handleSubmit}>
        <input type="text" name="title" className="flex-1 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500" />
    </form>
}

export default Form;