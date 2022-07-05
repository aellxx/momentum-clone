// query form, input, h1 from html using css selectors 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greeting");

// save all repeated strings to variable
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // stop default behavior of browser: refreshing
    event.preventDefault();
    // once user hits enter/clicks button, hide the login form
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // temporarily save the user's input to a variable
    const username = loginInput.value; 
    // save the user's name to the local storage
    localStorage.setItem(USERNAME_KEY, username);
    // display the greeting message
    paintGreetings(username);
    
}

// display greetings
function paintGreetings(username){
    greetings.innerText = `Hello, ${username}`;
    greetings.classList.remove(HIDDEN_CLASSNAME);
}

// null if nothing in local storage
// contains user's name otherwise
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // greet user if name in local storage
    paintGreetings(savedUsername);
}