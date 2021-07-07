import mongoose from "mongoose";

async function dbConnect() {
  await mongoose.connect(
    process.env.NODE_ENV === "production"
      ? process.env.MONGODB_URI
      : process.env.MONGODB_LOCAL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
}

export default dbConnect;
