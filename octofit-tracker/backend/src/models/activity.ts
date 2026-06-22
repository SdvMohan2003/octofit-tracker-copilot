import mongoose, { Schema } from 'mongoose';

const ActivitySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, default: 0 },
  calories: { type: Number, default: 0 },
  occurredAt: { type: Date, default: Date.now },
});

export default mongoose.model('Activity', ActivitySchema);
