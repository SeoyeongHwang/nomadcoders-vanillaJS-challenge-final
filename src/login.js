// 로컬 스토리지를 사용한 로그인
const loginArea = document.querySelector("#login-area");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingText = document.querySelector("#greeting-area h1");
const todoArea = document.querySelector("#todo-area");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

function handleLogInSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    showUsername(username);
}

function showUsername(username) {
    greetingText.innerText = `Have a Good Day,\n${username}`;
    loginArea.classList.add(HIDDEN_CLASSNAME);
    todoArea.classList.remove(HIDDEN_CLASSNAME);
}

const loggedUsername = localStorage.getItem(USERNAME_KEY);

if (loggedUsername == null) {
    loginArea.classList.remove(HIDDEN_CLASSNAME);
    todoArea.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLogInSubmit);
} else {
    showUsername(loggedUsername);
}