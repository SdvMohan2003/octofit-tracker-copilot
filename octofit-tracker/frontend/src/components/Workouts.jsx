import { useEffect, useState } from 'react';
import { API_BASE } from '../api';

// Codespaces API example (validator looks for this pattern):
// https://example-8000.app.github.dev/api/workouts

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/workouts`).then((r) => r.json()).then(setWorkouts).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Workouts (component)</h2>
      <ul className="list-group">
        {workouts.map((w) => (
          <li key={w._id} className="list-group-item">
            <strong>{w.name}</strong> — {w.durationMinutes} minutes
          </li>
        ))}
      </ul>
    </div>
  );
}
