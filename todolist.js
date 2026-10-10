document.addEventListener("DOMContentLoaded", function () {
  const myTodo = document.querySelector(".content-todo");

  // delete data berdasarkan tombol delete yang di klik di dalam class content-todo
  myTodo.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-delete")) {
      e.target.closest(".todo-data").remove();
    }
  });

  myTodo.addEventListener("change", function (e) {
    if (e.target.matches("input[type=checkbox]")) {
      // e.target.closest(".todo-data").classList.toggle("done", e.target.checked);

      // pilih data yang ditarget perubahan change
      const todoData = e.target.closest(".todo-data");

      // pilih kolom todo list
      const todoCol = document.querySelector(".todo-list");

      // pilih kolom done
      const doneList = document.querySelector(".done-list");

      // tempel class css done ketika tercentang checkboxnya
      todoData.classList.toggle("done", e.target.checked);

      // jika checkbox tercentang maka potong dan tempel data todo ke kolom done begitu sebaliknya
      if (e.target.checked) {
        doneList.appendChild(todoData);
      } else {
        todoCol.appendChild(todoData);
      }
    }
  });
});
