// grab the todo-list form 
const toDoForm = document.getElementById("todo-form");
// grab the user input
const toDoInput = toDoForm.querySelector("input");
// grab the list
const toDoList = document.getElementById("todo-list");

// store all to-dos
const toDos = [];

function saveToDos() {
    localStorage.setItem("toDos", toDos);
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