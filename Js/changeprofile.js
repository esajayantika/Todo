document.addEventListener("DOMContentLoaded", function () {
  const btnToEdit = document.getElementById("btn-to-edit");
  const btnSave = document.getElementById("btn-save");
  const btnCancel = document.getElementById("btn-cancel");

  //   fungsi untuk navigasi mau munculin profile yang mana
  function switchPage(pageID) {
    document.querySelectorAll(".profile-info").forEach((profile) => {
      profile.classList.remove("active");
    });
    document.getElementById(pageID).classList.add("active");
  }

  //   untuk pindah ke form edit dan ambil data di profile
  btnToEdit.addEventListener("click", () => {
    document.getElementById("input-name").value = document.getElementById("view-name").textContent;
    document.getElementById("input-job").value = document.getElementById("view-job").textContent;

    switchPage("page-edit");
  });

  //   save dan update value yang diubah ke tampilan profile
  btnSave.addEventListener("click", () => {
    const newName = document.getElementById("input-name").value;
    const newJob = document.getElementById("input-job").value;

    if (newName.trim() && newJob.trim()) {
      document.getElementById("view-name").textContent = newName;
      document.getElementById("view-job").textContent = newJob;

      switchPage("page-home");
    } else {
      alert("This field is required");
    }
  });

  // cancel handle
  btnCancel.addEventListener("click", () => {
    switchPage("page-home");
  });
});
