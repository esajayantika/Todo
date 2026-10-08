//Selesaikan render html baru js aktif (karena script ditaruh di header)
document.addEventListener("DOMContentLoaded", function () {
  const todo = document.querySelector("#todo");
  const addTodo = document.querySelector(".btn-addactivity");
  const todoList = document.querySelector(".todo-list");

  addTodo.addEventListener("click", function (e) {
    e.preventDefault(); //tahan reload browser

    const todoData = todo.value;

    //mencegah input todo kosongan
    if (todoData.trim() === "") return;

    const todoItem = `
    <div class="todo-data">
      <span>${todoData}</span>
      <input type="checkbox">
      <button class="btn-delete">Delete</button>
    </div>`;

    //Selipi Data baru di deretan paling akhir
    todoList.insertAdjacentHTML("beforeend", todoItem);

    //kosongin field agar siap diisi lagi
    todo.value = "";
  });
});
