const mongoose=require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected successfully"))
.catch((error) => {
    console.log("Database connection error: " + error.message);
    console.log("Please check your internet connection and MongoDB Atlas credentials");
});

module.exports = mongoose;