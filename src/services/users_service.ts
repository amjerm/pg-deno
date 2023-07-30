import MongoConnection from "../database/mongo_connection.ts";

export default {
  getUsers: async () => {
    const mongo = new MongoConnection();
    await mongo.connect();
    return mongo.getCollection("users");
  },
};
