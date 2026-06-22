import { useEffect, useState } from 'react';
import { fetchUsers } from '../api';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Users</h2>
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
