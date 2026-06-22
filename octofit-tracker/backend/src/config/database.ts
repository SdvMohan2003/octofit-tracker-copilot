import mongoose from 'mongoose';

export async function connectDB(mongoUri?: string) {
  const uri = mongoUri ?? process.env.MONGO_URI ?? 'mongodb://localhost:27017/octofit_db';
  await mongoose.connect(uri);
}

export default connectDB;
