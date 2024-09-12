const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors=require('cors');

dotenv.config(); // Load .env variables
connectDB(); // Connect to MongoDB


const app = express();


app.use(express.json());
 

app.use(cors({
    origin: 'http://localhost:5173', // The port your React frontend is running on
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Routes
app.use('/api/user', authRoutes); // Base route for authentication

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
