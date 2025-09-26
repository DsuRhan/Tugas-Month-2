window.onload = function () {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((item) => tampilkanTodo(item));
};

function tambahTodo() {
  const input = document.getElementById("todoInput");
  const value = input.value.trim();
  const priority = document.getElementById("prioritySelect").value;
  const deadline = document.getElementById("deadlineInput").value;
  if (value === "") return alert("Tolong isi inputnya");
  if (priority === "") return alert("Pilih tingkat prioritasnya")
  if (!deadline) return alert ("Tolong isi deadlinenya");
  alert("Tugas ditambahkan")
  const todoObj = { text: value, priority: priority, deadline: deadline };
  tampilkanTodo(todoObj);
  simpanTodo(todoObj);

  input.value = "";
  document.getElementById("deadlineInput").value = "";
}

function tampilkanTodo(todo) {
  const list = document.getElementById("todoList");
  const item = document.createElement("li");
  item.classList.add(todo.priority);

  // Info teks + deadline
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");
  infoDiv.innerHTML = `<strong>${todo.text}</strong><br><span class="deadline">Deadline: ${todo.deadline || "-"}</span>`;

  // Tombol hapus
  const delBtn = document.createElement("button");
  delBtn.textContent = "Hapus";
  delBtn.onclick = function () {
    list.removeChild(item);
    hapusTodo(todo);
  };

  // Tombol edit
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    editTodo(todo, item);
  };

  item.appendChild(infoDiv);
  item.appendChild(editBtn);
  item.appendChild(delBtn);
  list.appendChild(item);
}

function simpanTodo(todo) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function hapusTodo(todo) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter((item) =>
    !(item.text === todo.text && item.priority === todo.priority && item.deadline === todo.deadline)
  );
  localStorage.setItem("todos", JSON.stringify(todos));
}

function editTodo(todo, listItem) {
  const newText = prompt("Edit tugas:", todo.text);
  const newDeadline = prompt("Edit deadline (YYYY-MM-DD):", todo.deadline);

  if (newText !== null && newText.trim() !== "") {
    todo.text = newText.trim();
  }
  if (newDeadline !== null) {
    todo.deadline = newDeadline;
  }

  // update localStorage
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  const idx = todos.findIndex((t) =>
    t.text === todo.text && t.priority === todo.priority && t.deadline === todo.deadline
  );
  if (idx > -1) {
    todos[idx] = todo;
  }
  localStorage.setItem("todos", JSON.stringify(todos));

  // render ulang list
  document.getElementById("todoList").innerHTML = "";
  todos.forEach((t) => tampilkanTodo(t));
}
