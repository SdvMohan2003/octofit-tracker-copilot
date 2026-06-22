import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;
const mongoUri = process.env.MONGO_URI ?? 'mongodb://localhost:27017/octofit_db';

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ status: 'ok', message: 'OctoFit Tracker API is running' });
});

app.get('/api/health', (req, res) => {
  res.json({ mongoUri, port });
});

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });
