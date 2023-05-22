class ToDoItem{
    title:string;
    dueDate: Date;
    isCompleted:boolean;

   
}
window.onload = function(){
   
    let todoString = JSON.stringify(ToDoItem);
    localStorage.setItem("ToDoObject", todoString);

    let todoResult = localStorage.getItem("ToDoObject");
    let myToDoList:ToDoItem = JSON.parse(todoResult);
    console.log(myToDoList);
}

/*
let item = new ToDoItem();
item.title = "testing";
item.dueDate = new Date(2023, 5, 20);
item.isCompleted = false;
*/

window.onload = function(){
    let addItem = document.getElementById("Add");
    addItem.onclick = main;
}

function main(){
    if(isValid()){
        let item = getToDoItem();
        displayToDoItem(item);
    }
}
/**
 * Check form data is valid
 */
function isValid(): boolean{
    return true;
}

/**
 * Get all inout off form and wrap in
 * a ToDoItem object
 */
function getToDoItem(): ToDoItem{
    let myItem = new ToDoItem();

    let titleInput = getInput("title");
    myItem.title = titleInput.value

    let dueDateInput = getInput("dueDate");
    myItem.dueDate = new Date(dueDateInput.value);

    let isCompleted = getInput("isCompleted");
    myItem.isCompleted = isCompleted.checked;

    return myItem;
}

function getInput(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}
/**
 * 
 *  Display given ToDoItem on web page
 */

function displayToDoItem(item:ToDoItem): void{
    let itemText = document.createElement("h3");
    itemText.innerText = item.title;

    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toDateString();

    let itemDiv = document.createElement("div");

    itemDiv.onclick = markAsComplete;

    itemDiv.classList.add("todo");
    if(item.isCompleted){
        itemDiv.classList.add("completed");
    }

    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);

    if(item.isCompleted){
        let completedToDos = document.getElementById("CompletedItems");
        completedToDos.appendChild(itemDiv);
    }
    else{
        let incompleteToDos = document.getElementById("IncompleteItems");
        incompleteToDos.appendChild(itemDiv);
    }
}

function markAsComplete(){
    let itemDiv = this;
    itemDiv.classList.add("completed");

    let completedItems = document.getElementById("CompletedItems");
    completedItems.appendChild(itemDiv);
}



