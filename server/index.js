// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests from specified origin
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// Database connection
const mongoUrl ="mongodb+srv://alirashidb38:2N7LeWts50XVNWPg@cluster0.70etjii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database");
}).catch((e) => console.log(e));

// Routes
app.use('/', authRoutes);

// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
