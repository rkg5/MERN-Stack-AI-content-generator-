const mongoose = require("mongoose");
//PASS: '"mongodb+srv://twentekghana:I0XU4wUzi9rZCBil@masync-mern-ai.24hgrcc.mongodb.net/masync-mern-ai?retryWrites=true&w=majority"'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
     "mongodb+srv://addusirmac:a6kXJqW416IyASjK@mernstackchatgpt.kzobz.mongodb.net/mernstackchatgpt?retryWrites=true&w=majority&appName=MERNStackChatgpt"
    );

    console.log(`Mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
