import users from "./user.json" with { type: "json" };

export function getAllUser() {
  return users;
}

export function getUserById(id) {
  return users.find(u => u.id === id);
}
