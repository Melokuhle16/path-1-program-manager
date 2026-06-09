const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", function(){

    const taskText = taskInput.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    tasks.push(taskText);

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function(){
        span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(){

        li.remove();

        const index = tasks.indexOf(taskText);

        tasks.splice(index, 1);

    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

});