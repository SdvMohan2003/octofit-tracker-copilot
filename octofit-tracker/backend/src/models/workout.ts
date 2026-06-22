import mongoose, { Schema } from 'mongoose';

const WorkoutSchema = new Schema({
  name: { type: String, required: true },
  exercises: [{ name: String, reps: Number, sets: Number }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Workout', WorkoutSchema);
