import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

/**
 * SQL:
 * CREATE TABLE tasks (
 *   id SERIAL PRIMARY KEY,
 *   title TEXT NOT NULL,
 *   description TEXT,
 *   completed BOOLEAN DEFAULT FALSE NOT NULL,
 *   created_at TIMESTAMP DEFAULT NOW() NOT NULL,
 *   updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
 * );
 */
export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  completed: boolean('completed').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

