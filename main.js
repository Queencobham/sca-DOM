const form  = document.getElementById('todo-form')
const todos = document.getElementById('todos')
const search = document.getElementById('search')

form.addEventListener('submit', submitTodo)
todos.addEventListener('click', deleteTodo)
search.addEventListener('keyup', searchTodos)

let myTodos = []

function updateTodos(t) {
      // append a list item to the todos ul
  todos.innerHTML = myTodos.map((todo, index) => {
    return `
  <li id="${index}" class="list-group-item d-flex align-item-center w-100 justify-content-between">
    ${todo}
    <button type="button" class="btn delete-todo">&times;</button>
  </li>
  `
  }).join("	")
}

function submitTodo(e) {
  e.preventDefault()

  // get what the user typed
  const todo = document.getElementById('todo').value

  // add new todo
  myTodos.push(todo);

  // update todos
  updateTodos()

  // clear todo field after adding 
  form.reset()
}

function deleteTodo(e) {
  const isButton = e.target.classList.contains('delete-todo')
  if(isButton) {
    // delete todo
    const index = e.target.parentElement.id 
    myTodos.splice(index, 1)
    updateTodos()
  }
}

function searchTodos() {
  const filtered = [...myTodos].filter(todo => {
    return (
      todo.toLowerCase().search(search.value.toLowerCase()) !== -1 
    );
  });
  const t = [...filtered]
  console.log(t)
  myTodos = t
  updateTodos()
}