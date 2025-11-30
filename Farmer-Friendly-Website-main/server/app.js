require("dotenv").config({ path: __dirname + '/.env' });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const cookieParser = require("cookie-parser");

const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cookieParser(""));

// CORS configuration to allow credentials and cookies from frontend
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(router);

const port = 8005;

// Wait for MongoDB connection before starting server
mongoose.connection.once('open', () => {
    console.log('MongoDB connection established');
    DefaultData();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
