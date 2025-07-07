import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.COSMOSDB_URI!;
const dbName = process.env.COSMOSDB_DBNAME!;
const client = new MongoClient(uri);

export async function getDb() {
  await client.connect();
  return client.db(dbName);
}