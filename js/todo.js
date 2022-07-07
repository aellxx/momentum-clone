// grab the todo-list form 
const toDoForm = document.getElementById("todo-form");
// grab the user input
const toDoInput = toDoForm.querySelector("input");
// grab the list
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// store all to-dos: start as empty array
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // get the entire li element containing the button
    const li = event.target.parentElement;
    // delete
    li.remove();
}

function paintToDo(newToDo) {
    // create list
    const li =  document.createElement("li"); 

    // create span & add text
    const span = document.createElement("span"); 
    span.innerText = newToDo; 
    // create button & add text
    const button = document.createElement("button");
    button.innerText = "❌";

    // click button -> delete to do
    button.addEventListener("click", deleteToDo);

    // add span and button to list element 
    li.appendChild(span); 
    li.appendChild(button);
    // add list to toDoList
    toDoList.appendChild(li);
}



function handleToDoSubmit(event) {
    // prevent page refresh
    event.preventDefault();
    // save value 
    const newToDo = toDoInput.value;
    toDos.push(newToDo);
    // empty the input space
    toDoInput.value = "";
    // paint to-do
    paintToDo(newToDo);
    // save to local storage
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // reload all previous values, if any
    toDos = parsedToDos;
    // re-paint all the to-dos
    parsedToDos.forEach(paintToDo);
}