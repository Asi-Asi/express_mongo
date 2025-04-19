import User from './users.model.js';

export async function getAllUsers(req, res) {
    
    try {

        const users = await User.getAllUsers(); 
        return res.status(200).json(users);
    }catch (error) {
        return res.status(500).json({ error: ' An error occurred while fetching users' });
    }
}