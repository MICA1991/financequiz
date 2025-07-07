const API_URL = import.meta.env.VITE_API_URL;

export async function fetchUser(email: string) {
  const res = await fetch(`${API_URL}/api/users/${email}`);
  return res.json();
}

export async function createUser(user: any) {
  const res = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
}