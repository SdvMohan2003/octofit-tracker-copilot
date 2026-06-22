import connectDB from '../config/database';
import User from '../models/user';
import Team from '../models/team';
import Activity from '../models/activity';
import Workout from '../models/workout';
import Leaderboard from '../models/leaderboard';

async function seed() {
  await connectDB();

  console.log('Seeding database...');

  await User.deleteMany({});
  await Team.deleteMany({});
  await Activity.deleteMany({});
  await Workout.deleteMany({});
  await Leaderboard.deleteMany({});

  const alice = await User.create({ name: 'Alice', email: 'alice@example.com' });
  const bob = await User.create({ name: 'Bob', email: 'bob@example.com' });

  const team = await Team.create({ name: 'Team Octo', members: [alice._id, bob._id] });

  const workout = await Workout.create({ name: 'Quick Cardio', exercises: [{ name: 'Jumping Jacks', reps: 30, sets: 3 }] });

  const act1 = await Activity.create({ user: alice._id, type: 'run', durationMinutes: 30, calories: 300 });
  const act2 = await Activity.create({ user: bob._id, type: 'swim', durationMinutes: 45, calories: 450 });

  await Leaderboard.create({ user: alice._id, score: 120 });
  await Leaderboard.create({ user: bob._id, score: 95 });

  console.log('Seed complete');
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
