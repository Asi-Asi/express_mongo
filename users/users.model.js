// import { getUserById } from './users.controller.js';
// import { createUser } from './users.controller.js';
import {getAllUsersFromDB, getUserById, saveUserToDB} from './users.db.js';

export default class User {
  constructor(name, birthdate) {
    this.name = name;
    this.birthdate = birthdate;
  }
  
  static async getAllUsers() {
    try {
        return await getAllUsersFromDB(); // Fetch all users from the database 
    } catch (error) {
        throw new Error('model error: ' + error.message); // Handle any errors that occur during the database call
    }
  }

  static async findUserById(id) {
    try {
        return await getUserById(id); // Fetch a user by ID from the database
    } catch (error) {
        throw new Error('model error: ' + error.message); // Handle any errors that occur during the database call
    }
  }

  //saving the user to the database
  async save() {
    try{
      return await saveUserToDB(this); // Save the user to the database
    }
    catch (error) {
      throw new Error('An error occurred while saving the user: ' + error.message); // Handle any errors that occur during the save operation
    }
  }
  
}