//TODO: getUserById, createUser, updateUser, deleteUser
import { getAllUsers} from './users.controller.js';
import { Router } from 'express';


const router = Router();

// // Define the routes for user operations
// router.get('/', getAllUsers); // Get all users

// // Get a user by ID
// router.get('/:id', getUserById); // Get a user by ID

// // Create a new user
// router.post('/', createUser); // Create a new user

// // Update a user by ID
// router.put('/:id', updateUser); // Update a user by ID

// // Delete a user by ID
// router.delete('/:id', deleteUser); // Delete a user by ID




// אותו רעיון ועבודה כמו למעלה (פשוט שיטה אחרת)

// Define the routes for user operations
router
    .get('/', getAllUsers) // Get all users
    // .get('/:id', getUserById) // Get a user by ID
    // .post('/', createUser) // Create a new user
    // .put('/:id', updateUser) // Update a user by ID
    // .delete('/:id', deleteUser); // Delete a user by ID

export default router;  