import express from 'express';
import usersRoutes from './users/users.routes.js';
const PORT = 5500;

const server = express();   
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


//routes --> controller -->model --> database


server.use('/api/users', usersRoutes); // Define the base route for user operations

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});