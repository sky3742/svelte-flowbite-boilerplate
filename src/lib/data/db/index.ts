import { TURSO_AUTH_TOKEN, TURSO_URL } from '$env/static/private';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

export const Client = createClient({
	url: TURSO_URL,
	authToken: TURSO_AUTH_TOKEN
});

export const DB = drizzle(Client);
