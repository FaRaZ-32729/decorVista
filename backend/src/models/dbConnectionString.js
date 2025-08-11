const mongoose = require("mongoose");

const db_Connection = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("Connection Created Successfully"));
        await mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}/brogrammers`);
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = db_Connection