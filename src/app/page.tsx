import { db } from "../lib/db";
import { tasks } from "../lib/db/schema";

export default async function Home() {
  const rows = await db.select().from(tasks)
  return (
    <table className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {rows.map((row) => <tr key={row.id}>
        <td>{row.title}</td>
      </tr>)}
    </table>
  );
}
