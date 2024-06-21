import mongoose from "mongoose";
async function connectDB() {
  try {
    if (mongoose.connections && mongoose.connections[0].readyState) {
      return;
    }
    const { connection } = await mongoose.connect(process.env.DB_CONNECT_STR as string, {
      dbName: "cms",
    });
    console.log(`connected to database: ${connection.host}`);
  } catch (error) {
    console.log(error);
    throw new Error("db connection fails");
  }
}

export default connectDB;
