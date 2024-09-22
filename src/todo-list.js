// 로컬 스토리지를 사용한 투두리스트

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}

function showTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const spand = document.createElement("span");
    spand.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteTodo);

    li.appendChild(spand);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObj);
    showTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach((item) => showTodo(item));
}