// Array to hold all the todo tasks
let todos = [];

// Function to render the todo list in the DOM
function render() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = ''; // Clear the list before rendering

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    // Todo item content
    li.innerHTML = `
      <span contenteditable="true" class="todo-text">${todo.text}</span>
      <button onclick="deleteTodo(${index})">Delete</button>
      <button onclick="updateTodo(${index})">Update</button>
    `;
    
    // Add the todo item to the list
    todoList.appendChild(li);

    // Make the contenteditable span change the text in the object
    const todoTextSpan = li.querySelector('.todo-text');
    todoTextSpan.addEventListener('blur', function() {
      todos[index].text = todoTextSpan.textContent;
    });
  });
}

// Function to add a new task
function addTodo() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (text !== '') {
    const newTodo = {
      text: text
    };
    todos.push(newTodo);
    input.value = ''; // Clear the input field
    render(); // Re-render the list to include the new task
  }
}

// Function to delete a task
function deleteTodo(index) {
  todos.splice(index, 1); // Remove the task from the array
  render(); // Re-render the list
}

// Function to update a task
function updateTodo(index) {
  const newText = prompt('Update the task:', todos[index].text);
  if (newText !== null && newText.trim() !== '') {
    todos[index].text = newText.trim();
    render(); // Re-render the list with updated task
  }
}

// Initial render
render();
