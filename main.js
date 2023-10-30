let addButton = document.querySelector("#todo-button");
let taskList = document.querySelector("#task-list");

addButton.addEventListener("click", function () {
  let inputTask = document.querySelector("#todo-input").value;

  let taskItem = document.createElement("div");

  let newItem = document.createElement("p");
  newItem.textContent = inputTask;
  document.body.appendChild(newItem);

  // Create a delete button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Add a click event listener to the delete button
  deleteButton.addEventListener("click", function () {
    // Remove the task item when the delete button is clicked
    taskItem.remove();
  });

  // Append the paragraph and delete button to the task item
  taskItem.appendChild(newItem);
  taskItem.appendChild(deleteButton);

  // Append the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  document.querySelector("#todo-input").value = "";
});

// let deleteButton = document.querySelector("#delete-buttonn");
