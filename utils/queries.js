export const API_URL = process.env.NEXT_PUBLIC_GH_STATS_API_URL;
export const achievements = () => fetch(`${API_URL}/achievements`).then(response => response.json())
export const achievementsStats = () => fetch(`${API_URL}/achievements/stats`).then(response => response.json())
export const feed = () => fetch(`${API_URL}/achievements/feed`).then(response => response.json())
export const scoreBoard = () => fetch(`${API_URL}/achievements/top`).then(response => response.json())
export const userAchievements = (id) => fetch(`${API_URL}/users/${id}`).then(response => response.json())
