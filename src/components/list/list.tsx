'use client';

import updateTask from "@/src/utils/actions/updateAction";

type item = {
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export const List = ({ items }: { items: item[] }) => {
    return <table className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {items.map((item) => (
            <tr key={item.id} onClick={() => updateTask(item.id, !item.completed)}>
                <td>{item.title}</td>
                <td>{item.completed ? "Completed" : "Incomplete"}</td>
            </tr>
        ))}
    </table>
}