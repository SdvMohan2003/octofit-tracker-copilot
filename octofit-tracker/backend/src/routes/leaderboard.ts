import { Router } from 'express';
import Leaderboard from '../models/leaderboard';

const router = Router();

router.get('/', async (req, res) => {
  const list = await Leaderboard.find().sort({ score: -1 }).limit(10).populate('user');
  res.json(list);
});

router.post('/', async (req, res) => {
  const entry = new Leaderboard(req.body);
  await entry.save();
  res.status(201).json(entry);
});

export default router;
