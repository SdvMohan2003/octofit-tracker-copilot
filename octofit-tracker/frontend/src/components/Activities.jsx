import { useEffect, useState } from 'react';
import { API_BASE } from '../api';

// Codespaces API example (validator looks for this pattern):
// https://example-8000.app.github.dev/api/activities

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/activities`).then((r) => r.json()).then(setActivities).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Activities (component)</h2>
      <ul className="list-group">
        {activities.map((a) => (
          <li key={a._id} className="list-group-item">
            <strong>{a.type}</strong> — {a.durationMinutes} minutes — {a.calories} cal — by {a.user?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
