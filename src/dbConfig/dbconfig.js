import mongoose from 'mongoose';

let isConnected = false;
export const connectToMongoDB = async () => {
	console.log("inside dbconfig");
	
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "userdata",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
	console.log("db connected");
	
  } catch (error) {
    console.log(error);
  }
};