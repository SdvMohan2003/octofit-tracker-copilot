import mongoose, { Schema } from 'mongoose';

const LeaderboardSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Leaderboard', LeaderboardSchema);
