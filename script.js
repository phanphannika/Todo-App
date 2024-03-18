const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");
const btnAdd = document.getElementById("add-task");

// Load tasks from localStorage on page load
window.addEventListener("load", () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    listContainer.innerHTML = savedTasks;
  }
});

btnAdd.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Save tasks to localStorage
    localStorage.setItem("tasks", listContainer.innerHTML);
  }
  inputBox.value = "";
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();

    // Save updated tasks to localStorage
    localStorage.setItem("tasks", listContainer.innerHTML);
  }
}, false);