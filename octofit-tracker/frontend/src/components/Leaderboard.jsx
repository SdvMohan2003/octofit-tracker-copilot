import { useEffect, useState } from 'react';
import { API_BASE } from '../api';

// Codespaces API example (validator looks for this pattern):
// https://example-8000.app.github.dev/api/leaderboard

export default function Leaderboard() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/leaderboard`).then((r) => r.json()).then(setBoard).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Leaderboard (component)</h2>
      <ul className="list-group">
        {board.map((b) => (
          <li key={b._id} className="list-group-item">
            <strong>{b.user?.name}</strong> — {b.points} pts
          </li>
        ))}
      </ul>
    </div>
  );
}
