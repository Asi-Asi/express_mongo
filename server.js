import express from 'express';
const PORT = 5500;

const server = express();   
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});