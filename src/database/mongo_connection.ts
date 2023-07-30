import { mongo } from "../../deps.ts";
import { dotenv } from "../../deps.ts";

const { MongoClient } = mongo;

const env = await dotenv.load();
const connectionString = env["MONGO_ATLAS_CONNECTION_STRING"];

export default class MongoConnection {
  client = new MongoClient();
  db: mongo.Database | undefined;

  constructor() {}

  async connect() {
    this.db = await this.client.connect(connectionString);
  }

  async getCollectionCount(collectionName: string): Promise<number> {
    if (!this.db) {
      throw Error("Connection is not initialized");
    }
    const collection = this.db.collection(collectionName);
    return await collection.countDocuments();
  }

  getCollection(collectionName: string): Promise<object> {
    if (!this.db) {
      throw Error("Connection is not initialized");
    }
    const collection = this.db.collection(collectionName);
    return collection.find().toArray();
  }
}
