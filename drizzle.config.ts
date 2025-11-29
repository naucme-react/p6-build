import { defineConfig } from 'drizzle-kit';

// Construct connection string from individual environment variables
const getDatabaseUrl = () => {
  const user = process.env['POSTGRES_USER'];
  const password = process.env['POSTGRES_PASSWORD'];
  const host = process.env['POSTGRES_HOST'] || 'localhost';
  const port = process.env['POSTGRES_PORT'] || '5432';
  const database = process.env['POSTGRES_DB'];

  if (!user || !password || !database) {
    throw new Error('Missing required database environment variables: POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB');
  }

  return `postgresql://${user}:${password}@${host}:${port}/${database}`;
};

export default defineConfig({
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: getDatabaseUrl(),
  },
});
