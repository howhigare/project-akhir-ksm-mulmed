import { pgTable, serial, varchar, pgEnum } from 'drizzle-orm/pg-core'

export const roleEnum = pgEnum('role', ['admin', 'kasir'])

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  username: varchar('username', { length: 50 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: roleEnum('role').default('kasir').notNull(),
})