const todolist = [{
  name: '',
  duedate: ''
}];

renderTodoList();

function renderTodoList() {
  let todolistHTML = '';

  todolist.forEach((todoObject, index) => {
    const { name, duedate } = todoObject;
    const html =
      `<div>${name}</div> 
       <div>${duedate}</div>
       <button onclick="
       todolist.splice(${index}, 1);
       renderTodoList()
       " class="delete-todo-button">Delete</button> `;

    todolistHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todolistHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input')
  const duedate = dateInputElement.value

  todolist.push({
    // name: name,
    // duedate: duedate
    name,
    duedate
  });

  inputElement.value = '';
  renderTodoList();
}
