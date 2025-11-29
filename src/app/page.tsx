import Form from "../components/form/form";
import { List } from "../components/list/list";
import { db } from "../lib/db";
import { tasks } from "../lib/db/schema";

export default async function Home() {
  const rows = await db.select().from(tasks)
  return (
    <div>
      <Form />
      <List items={rows} />
    </div>
  );
}
