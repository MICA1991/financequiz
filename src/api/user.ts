import { getDb } from './cosmosdb.js';

export async function createUser(user: any) {
  const db = await getDb();
  return db.collection('users').insertOne(user);
}

export async function findUserByEmail(email: string) {
  const db = await getDb();
  return db.collection('users').findOne({ email });
}