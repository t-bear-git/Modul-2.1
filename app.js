const addTodoForm = document.querySelector("#addTodoForm");
const addTodoInput = document.querySelector("#addTodoInputField");
const todoList = document.querySelector("#todoList");

const delBtn = document.querySelectorAll("li #delBtn");

// Focus on text input on load
addTodoInput.focus();

// Add event listener for submitting form.
addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(addTodoInput.value);
});
// Add input to the end of element, reset form, focus on input.
function addTodo(todoText) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todoText} <button id="delBtn" onclick="deleteTodo(this)">Delete</button></li>`
  );
  addTodoForm.reset();
  addTodoInput.focus();
}
// Delete corresponding li-element, focus on input.
function deleteTodo(element) {
  element.parentElement.remove();
  addTodoInput.focus();
}
