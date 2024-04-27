import { TodosTable } from '../schemas';

export type Todo = typeof TodosTable.$inferSelect;
