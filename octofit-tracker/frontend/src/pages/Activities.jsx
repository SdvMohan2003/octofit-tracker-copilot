import { useEffect, useState } from 'react';
import { fetchActivities } from '../api';

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities().then(setActivities).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Activities</h2>
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
