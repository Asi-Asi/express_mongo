export async function getAllUsersFromDB() {
  // Simulate a database call
  return [
    { id: 1, name: "John Doe", email: "john@doe.com", password: "password123" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@smith.com",
      password: "password456",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@johnson.com",
      password: "password789",
    },
  ];
}

// //MongoDB : demoUsers
//Password : 31hIcFJc822s7nm2
//User : asiahmad002

// MongoDB connection string
//mongodb+srv://asiahmad002:31hIcFJc822s7nm2@demousers.lif3jhc.mongodb.net/?retryWrites=true&w=majority&appName=demoUsers
