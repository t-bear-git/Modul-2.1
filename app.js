const addTodoForm = document.querySelector('#addTodoForm');
const addTodoInput = document.querySelector('#addTodoInputField');
const todoList = document.querySelector('#todoList');

// Focus on text input on load
addTodoInput.focus();

// Add event listener for submitting form.
addTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo(addTodoInput.value);
});

// Add input to the end of list, reset form, focus on input.
function addTodo(todoText) {
  todoList.insertAdjacentHTML(
    'beforeend',
    `<li>${todoText} <button id="delBtn" onclick="deleteTodo(this)">X</button></li>`
  );
  addTodoForm.reset();
  addTodoInput.focus();
}
// Delete corresponding li-element, focus on input.
function deleteTodo(element) {
  element.parentElement.remove();
  addTodoInput.focus();
}
