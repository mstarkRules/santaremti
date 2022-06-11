import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbname = process.env.MONGODB_DB;

let cachedDb;
let cachedClient;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (!dbname) {
  throw new Error("Please define the MONGODB_DB variable");
}

export async function connectToDatabase() {
  if (cachedDb && cachedClient) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbname);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default connectToDatabase;

// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;

// const options = {};

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// if (!process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }

//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;
