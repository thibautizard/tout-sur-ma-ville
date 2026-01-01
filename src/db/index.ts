import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from './schema.ts'

const sql = neon(process.env.VITE_DATABASE_URL!)
export const db = drizzle(sql, { schema })

// Legacy client export for neon demo
let client: ReturnType<typeof neon>

export async function getClient() {
  if (!process.env.VITE_DATABASE_URL) {
    return undefined
  }
  if (!client) {
    client = await neon(process.env.VITE_DATABASE_URL!)
  }
  return client
}
