
const inputBox = document.querySelector("#input_text");
const addBtn = document.querySelector("#input_button");
const todoList = document.querySelector("#list_site ul");
const clearBtn = document.querySelector("#clear_button");
const pendingNumber = document.querySelector('.pending_no');

inputBox.onkeyup = () => {
    let userData = inputBox.value;

    if(userData.trim() != 0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active");
    }
    
    if(window.event.keyCode == 13){
        addBtn.onclick();
    }
}

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArray  = [];
    }else{
        listArray = JSON.parse(getLocalStorage);
    }
    listArray.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArray));

    showTasks();
    inputBox.value = '';
    addBtn.classList.remove("active");
}

function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo");
    let newLiTag = '';
    if(getLocalStorage == null){
        listArray  = [];
    }else{
        listArray = JSON.parse(getLocalStorage);
    }
    listArray.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></span> </li>`;
        todoList.innerHTML = newLiTag;
    });
    pendingNumber.textContent = listArray.length;
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorage);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}

let backGround = document.querySelector("body");

backGround.onload = () => {
    showTasks();
}

function deleteAll(){
    localStorage.clear();
    todoList.innerHTML = '';
    showTasks();
}