import {getAllUsersFromDB} from './users.db.js';

export default class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  
  static async getAllUsers() {
    try {
        return await getAllUsersFromDB(); // Fetch all users from the database 
    } catch (error) {
        throw new Error('An error occurred while fetching users: ');
    }
  }
}