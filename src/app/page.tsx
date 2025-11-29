import { db } from "../lib/db";
import { tasks } from "../lib/db/schema";

export default async function Home() {
  await db.insert(tasks).values({
    title: "Uvař večeři", 
  });
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Přidávám úkol
    </div>
  );
}
