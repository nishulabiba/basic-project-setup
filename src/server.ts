// import MongoClient from 'mongodb'
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
//  const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.PASS}@cluster0.ubbebrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//  const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

async function main() {
  try {
    await mongoose.connect(`${config.database_url}`);

    app.listen(config.port, () => {
      console.log(`Example app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
