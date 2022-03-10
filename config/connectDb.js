const mongoose = require("mongoose");

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.db);
        console.log("data base is connected");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDb