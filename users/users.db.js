import { MongoClient, ObjectId } from "mongodb";

export async function getAllUsersFromDB() {
  // Simulate a database call
  let client;
  try {
    console.log('Opening connection to MongoDB...');
    client = await MongoClient.connect(process.env.CONNECTION_STRING);
    let db = client.db(process.env.DB_NAME);
    return await db.collection("UsersData").find({}).toArray();
  }
  catch (error) {
    console.error('Error fetching users from DB:', error);
    throw new Error('Database error');
  }
  finally {
    client.close();
    console.log('Closing connection to MongoDB...');
  }
  
}

export async function getUserById(id) {

  let client;
  try {
    client = await MongoClient.connect(process.env.CONNECTION_STRING);
    let db = client.db(process.env.DB_NAME);
    return await db.collection("UsersData").findOne({ _id: ObjectId.createFromHexString(id) });
  }
  catch (error) {
    console.error('Error fetching user from DB:', error);
    throw new Error('Database error');
  }
  finally {
    client.close();
  }

}



export async function saveUserToDB(user) {
  let client;
  try {
    client = await MongoClient.connect(process.env.CONNECTION_STRING);
    let db = client.db(process.env.DB_NAME);
    const result = await db.collection("UsersData").insertOne(user);
    return result; // Return the inserted user
  }
  catch (error) {
    console.error('Error saving user to DB:', error);
    throw new Error('Database error');
  }
  finally {
    client.close();
  }
}

// //MongoDB : Users homework
//Admin-DB : asiahmad002
//Password : qyOVVCb8m4NyLYaU

// MongoDB connection string
// mongodb+srv://asiahmad002:qyOVVCb8m4NyLYaU@test1.bikckdw.mongodb.net/?retryWrites=true&w=majority&appName=test1


