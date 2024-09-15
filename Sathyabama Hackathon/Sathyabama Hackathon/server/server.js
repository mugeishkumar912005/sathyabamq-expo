const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors=require('cors');
const path = require('path');

dotenv.config(); 
connectDB(); 


const app = express();


app.use(express.json());
 

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
const imagesPath = path.join(__dirname, 'path_to_your_images_folder');
app.use('/api/user/image', express.static(imagesPath));
// Routes
app.use('/api/user', authRoutes); // Base route for authentication

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
