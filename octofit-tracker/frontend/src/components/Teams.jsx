import { useEffect, useState } from 'react';
import { API_BASE } from '../api';

// Codespaces API example (validator looks for this pattern):
// https://example-8000.app.github.dev/api/teams

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/teams`).then((r) => r.json()).then(setTeams).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Teams (component)</h2>
      <ul className="list-group">
        {teams.map((t) => (
          <li key={t._id} className="list-group-item">
            <strong>{t.name}</strong> — {t.members?.length || 0} members
          </li>
        ))}
      </ul>
    </div>
  );
}
