//Selesaikan render html baru js aktif (karena script ditaruh di header)
document.addEventListener("DOMContentLoaded", function () {
  const todo = document.getElementById("todo");
  const addTodo = document.getElementById("btn-addactivity");
  const datedata = document.getElementById("dateinput");
  const todoList = document.querySelector(".todo-list");
  const doneList = document.querySelector(".done-list");
  const delTodo = document.getElementById("btn-delall");

  //format date reusable
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // jam & tanggal live
  const updateClock = () => {
    const now = new Date();

    const myDate = now.toLocaleDateString("id-ID", options);
    const myTime = now.toLocaleTimeString();

    document.getElementById("live-clock").textContent = `${myDate} - ${myTime}`;
  };

  updateClock();
  setInterval(updateClock, 1000);

  addTodo.addEventListener("click", function (e) {
    e.preventDefault(); //tahan reload browser

    //ambil nilai text area
    const todoData = todo.value;

    //lempar raw date dulu untuk validasi
    const rawdate = datedata.value;

    //memilih radio btn terchecked
    const priorBtn = document.querySelector('input[name="priority"]:checked');

    if (!priorBtn || todoData.trim() === "" || rawdate.trim() === "") {
      alert("Please complete your task, date and priority field !");
      return;
    }

    const priorval = priorBtn.value;

    //reformat inputan date
    const selectedDate = new Date(datedata.value).toLocaleDateString("id-ID", options);

    const todoItem = `
    <div class="todo-data">
      <span>${selectedDate}</span> <br>
      <span>${todoData}</span>
      <span>(<strong>${priorval}</strong>)</span>
      <input type="checkbox">
      <button class="btn-delete">Delete</button>
    </div>`;

    //Selipin Data baru di deretan paling akhir
    todoList.insertAdjacentHTML("beforeend", todoItem);

    //kosongin field agar siap diisi lagi
    todo.value = "";
    priorBtn.checked = false;
    datedata.value = "";
  });

  // pointing tombol del all kemudian hapus semua class .todo-data
  delTodo.addEventListener("click", function () {
    document.querySelectorAll(".todo-data").forEach((card) => card.remove());
  });
});
