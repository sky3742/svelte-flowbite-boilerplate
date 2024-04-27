import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { v4 as uuid } from 'uuid';

export const TodosTable = sqliteTable('todos', {
	id: text('id').primaryKey().$defaultFn(uuid),
	text: text('text').notNull(),
	completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.default(sql`(current_timestamp)`),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$onUpdateFn(() => new Date())
});
