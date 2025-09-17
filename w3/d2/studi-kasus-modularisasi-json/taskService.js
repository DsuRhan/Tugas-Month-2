let tasks = [];
let counter = 1;

export function addTask(judul) {
  tasks.push({ id: counter++, judul });
}

export function getAllTask() {
  return tasks;
}

export function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}
