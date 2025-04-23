import { ObjectId } from 'mongodb';
import User from './users.model.js';

export async function getAllUsers(req, res) {
    
    try {

        const users = await User.getAllUsers(); 
        return res.status(200).json(users);
    }catch (error) {
        return res.status(500).json({ error: 'controller error' });
    }
}

export async function gettUserById(req, res) {

    // Validate the ID parameter    
    let { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'User ID is required' });
    }
    if(!ObjectId.isValid(id)){
        return res.status(400).json({ error: 'Invalid User ID' });
    }

    // retrieve the user from the database
    try{
        const user = await User.findUserById(id); // Assuming you have a function to get a user by ID
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).json({ error: 'An error occurred while fetching the user' });
    }

}



export async function createUser(req, res) {
    let { name, birthdate } = req.body;

    if (!name || !birthdate) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    // Create a new user object
    const newUser = new User(null, name, birthdate); // Assuming you have a constructor for the User class
    try{
        // Save the new user to the database
        const savedUser = await newUser.save(); // Assuming you have a save method in your User class
        return res.status(201).json(savedUser); // Return the created user with a 201 status code
    }
    catch (error) {
        return res.status(500).json({ error: 'An error occurred while creating the user' });
    }

}