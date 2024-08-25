const mongoose = require("mongoose");
const colors = require("colors");

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log("MongoDB URI:", process.env.MONGODB_URI); // Debugging output
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // other options if needed
    });
    console.log(`MongoDB connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
    console.error(error.stack);
    process.exit(1); // Exit the process on connection failure
  }
};

module.exports = connectDB;
