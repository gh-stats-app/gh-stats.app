export const API_URL = process.env.NEXT_PUBLIC_GH_STATS_API_URL;
export const achievements = () => fetch(`${API_URL}/achievements`).then(response => response.json())
export const feedToken = (id) => fetch(`${API_URL}/users/${id}`).then(response => response.json())
