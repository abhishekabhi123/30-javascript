const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");

function addTask() {
  if (inputBox.value == "") {
    alert("Please enter something");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

function showTask() {
  taskContainer.innerHTML = localStorage.getItem("data");
}

showTask();
