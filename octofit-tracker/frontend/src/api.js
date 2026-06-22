const codespace = import.meta.env.VITE_CODESPACE_NAME;
const baseHost = codespace ? `https://${codespace}-8000.app.github.dev` : 'http://localhost:8000';
export const API_BASE = `${baseHost}/api`;

export async function fetchUsers() {
  const res = await fetch(`${API_BASE}/users`);
  return res.json();
}

export async function fetchActivities() {
  const res = await fetch(`${API_BASE}/activities`);
  return res.json();
}

export default { fetchUsers, fetchActivities, API_BASE };
