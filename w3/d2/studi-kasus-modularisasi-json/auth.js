import users from "./users.json" with { type: "json" };

export function login(username, password) {
  return users.some(u => u.username === username && u.password === password);
}

export function register(username, password) {
  users.push({ username, password });
  console.log("User baru ditambahkan:", username);
}
