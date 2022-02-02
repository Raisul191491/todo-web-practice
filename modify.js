'use strict';

window.addEventListener("load", () => {
    const taskInput = document.getElementById("task-input");
    const inputBtn = document.getElementById("input-button");
    const taskList = document.getElementById("list");
    inputBtn.addEventListener("click", (x) => {
        const task = taskInput.value;
        //x.preventDefault();
        if (task === "") {
            alert("Please, enter a task");
            return;
        }
        const taskBox = document.createElement("div");
        const taskBoxElement = document.createElement("input");
        const editBtn = document.createElement("button");
        const dltBtn = document.createElement("button");

        taskBox.classList.add("task-list");

        taskBoxElement.classList.add("task-list-element");
        taskBoxElement.value = task;
        taskBoxElement.readOnly = true;


        editBtn.innerText = "Edit";
        editBtn.classList.add("task-edit-button");


        dltBtn.innerText = "Delete";
        dltBtn.classList.add("task-delete-button");

        taskBox.appendChild(taskBoxElement);
        taskBox.appendChild(editBtn);
        taskBox.appendChild(dltBtn);

        taskList.appendChild(taskBox);

        taskInput.value = "";

        editBtn.addEventListener("click", () => {
            taskBoxElement.readOnly = false;
            dltBtn.innerText = "Save";
            dltBtn.addEventListener("click", () => {
                if (dltBtn.innerText === "Save") {
                    taskBoxElement.value = taskBoxElement.value;
                    taskBoxElement.readOnly = true;
                    dltBtn.innerText = "Delete";
                }
            });
        });

        dltBtn.addEventListener("click", () => {
            if (dltBtn.innerText === "Delete") {
                taskList.removeChild(taskBox);
            }
        });
    });
});