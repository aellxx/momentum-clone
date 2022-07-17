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
    const li = event.target.parentElement;
    // this is a string
    const deleteId = li.id;
    // delete html
    li.remove();
    // delete from array
    toDos = toDos.filter((toDoObj) => toDoObj.id != parseInt(deleteId));
    // save updated array to localStorage
    saveToDos();
}

function paintToDo(newToDoObj) {
    // create list
    const li =  document.createElement("li"); 
    li.id = newToDoObj.id;

    // create span & add text
    const span = document.createElement("span"); 
    span.innerText = `${newToDoObj.text}  `; 
    // create button & add text
    const button = document.createElement("button");
    button.classList.add("rounded-input");
    button.classList.add("box-shadow");
    button.innerText = "X";

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
    // check user login
    if (localStorage.getItem("username") === null){
        alert("Please log in before adding a to-do");
    } else {
        // save object with user-input value
        const newToDo = toDoInput.value;
        const newToDoObj = {
            id: Date.now(), 
            text: newToDo,
        }
        toDos.push(newToDoObj);
        // empty the input space
        toDoInput.value = "";
        // paint to-do
        paintToDo(newToDoObj);
        // save to local storage
        saveToDos();
    }
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