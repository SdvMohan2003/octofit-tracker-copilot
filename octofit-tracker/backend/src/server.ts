import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import activitiesRouter from './routes/activities';
import workoutsRouter from './routes/workouts';
import leaderboardRouter from './routes/leaderboard';

dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;

// Build API base URL for Codespaces or localhost
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ status: 'ok', message: 'OctoFit Tracker API is running', baseUrl });
});

app.get('/api/health', (req, res) => {
  res.json({ port, baseUrl, codespaceName: codespaceName || 'not set' });
});

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/workouts', workoutsRouter);
app.use('/api/leaderboard', leaderboardRouter);

connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
    console.log(`API base URL: ${baseUrl}`);
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });
