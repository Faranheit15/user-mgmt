import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("err", (err) => {
      console.log("Error occured: ", err);
      process.exit();
    });
  } catch (error) {
    console.log("Error occured: ", error);
  }
}
