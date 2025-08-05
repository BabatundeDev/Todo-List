const todolist = [];

renderTodoList();

function renderTodoList() {
  let todolistHTML = '';

  todolist.forEach((todoObject, index) => {
    const { name, duedate } = todoObject;

    const html = `
      <div>${name}</div> 
      <div>${duedate}</div>
      <button onclick="
        todolist.splice(${index}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;

    todolistHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todolistHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');

  const name = inputElement.value.trim();
  const duedate = dateInputElement.value;

  if (name === '' || duedate === '') {
    alert('Please enter both a name and due date.');
    return;
  }

  todolist.push({
    name,
    duedate
  });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}
