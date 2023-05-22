class ToDoItem{
    title:string;
    dueDate: Date;
    isCompleted:boolean;

   
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

}

// Task: Allow user to mark a ToDoItem as completed
