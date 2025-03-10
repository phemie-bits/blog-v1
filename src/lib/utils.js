import mongoose from "mongoose";

const connection = {};

export async function connectToDb() {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
  } catch (error) {
      console.log(error);
      throw new Error(error);
  }
}
