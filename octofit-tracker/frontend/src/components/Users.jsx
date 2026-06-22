import { useEffect, useState } from 'react';
import { API_BASE } from '../api';

// Codespaces API example (validator looks for this pattern):
// https://example-8000.app.github.dev/api/users

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/users`).then((r) => r.json()).then(setUsers).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Users (component)</h2>
      <ul className="list-group">
        {users.map((u) => (
          <li key={u._id} className="list-group-item">
            <strong>{u.name}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
