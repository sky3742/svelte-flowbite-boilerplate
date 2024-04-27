import { eq } from 'drizzle-orm';
import { DB } from '../db';
import { TodosTable } from '../schemas';
import type { Todo } from '../types';

export class TodoService {
	static async getAll() {
		return await DB.select().from(TodosTable);
	}

	static async insert(text: string) {
		await DB.insert(TodosTable).values({ text });
	}

	static async update(todo: Todo) {
		await DB.update(TodosTable)
			.set({
				completed: todo.completed
			})
			.where(eq(TodosTable.id, todo.id));
	}

	static async delete(id: string) {
		await DB.delete(TodosTable).where(eq(TodosTable.id, id));
	}
}
