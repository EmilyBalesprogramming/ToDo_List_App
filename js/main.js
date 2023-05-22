var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var todoString = JSON.stringify(ToDoItem);
    localStorage.setItem("ToDoObject", todoString);
    var todoResult = localStorage.getItem("ToDoObject");
    var myToDoList = JSON.parse(todoResult);
    console.log(myToDoList);
};
window.onload = function () {
    var addItem = document.getElementById("Add");
    addItem.onclick = main;
};
function main() {
    if (isValid()) {
        var item = getToDoItem();
        displayToDoItem(item);
    }
}
function isValid() {
    return true;
}
function getToDoItem() {
    var myItem = new ToDoItem();
    var titleInput = getInput("title");
    myItem.title = titleInput.value;
    var dueDateInput = getInput("dueDate");
    myItem.dueDate = new Date(dueDateInput.value);
    var isCompleted = getInput("isCompleted");
    myItem.isCompleted = isCompleted.checked;
    return myItem;
}
function getInput(id) {
    return document.getElementById(id);
}
function displayToDoItem(item) {
    var itemText = document.createElement("h3");
    itemText.innerText = item.title;
    var itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toDateString();
    var itemDiv = document.createElement("div");
    itemDiv.onclick = markAsComplete;
    itemDiv.classList.add("todo");
    if (item.isCompleted) {
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);
    if (item.isCompleted) {
        var completedToDos = document.getElementById("CompletedItems");
        completedToDos.appendChild(itemDiv);
    }
    else {
        var incompleteToDos = document.getElementById("IncompleteItems");
        incompleteToDos.appendChild(itemDiv);
    }
}
function markAsComplete() {
    var itemDiv = this;
    itemDiv.classList.add("completed");
    var completedItems = document.getElementById("CompletedItems");
    completedItems.appendChild(itemDiv);
}
