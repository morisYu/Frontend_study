// 각 태그 위치 설정
const inputBox = document.querySelector("#input_text");
const addBtn = document.querySelector("#input_button");
const todoList = document.querySelector("#list_site ul");
const clearBtn = document.querySelector("#clear_button");
const pendingNumber = document.querySelector('.pending_no');

// #input_text 에서 데이터 입력 시
inputBox.onkeyup = () => {
    let userData = inputBox.value;

    if(userData.trim() != 0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active");
    }
    
    // #input_text 에서 Enter 입력 시
    if(window.event.keyCode == 13){
        addBtn.onclick();
    }
}

// #input_button 을 클릭했을 때
addBtn.onclick = () => {
    let userData = inputBox.value;
    // LocalStorage 에서 "New Todo"를 키로 가지는 문자데이터을 가지고 옴 
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArray  = [];
    }else{
        // 가지고온 JSON 문자열에서 Javascript 값이나 객체를 생성
        listArray = JSON.parse(getLocalStorage);
    }
    // listArray 배열에 새로운 값을 추가
    listArray.push(userData);

    // listArray 를 JSON 문자열로 변환 후 "New Todo"를 키로 가지는 문자데이터를 추가 또는 업데이트
    localStorage.setItem("New Todo", JSON.stringify(listArray));

    showTasks();
    inputBox.value = '';
    addBtn.classList.remove("active");
}

// listArray 에 있는 데이터 전체를 화면에 출력
function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo");
    let newLiTag = '';
    if(getLocalStorage == null){
        listArray  = [];
    }else{
        listArray = JSON.parse(getLocalStorage);
    }
    listArray.forEach((element, index) => {
        // 변수가 포함된 문자열 작성 시 백틱(`) 사용
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></span> </li>`;
        todoList.innerHTML = newLiTag;
    });
    pendingNumber.textContent = listArray.length;
}

// 선택한 list 삭제
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorage);
    // listArray 배열을 index 위치에서 갯수만큼 삭제 
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}

// 화면 로딩 시 localStorage에 저장되어있는 Todo list를 화면에 출력
// localStorage에는 직접 데이터를 삭제하기 전까지는 데이터가 남아있으나, 새로고침이나 재부팅 시
// 화면에 todo list는 표시가 되지 않기 때문에 화면 로딩 시 Todo list 를 화면에 출력하는 작업 필요
let backGround = document.querySelector("body");
backGround.onload = () => {
    showTasks();
}

// 모든 Todo list 삭제
function deleteAll(){
    localStorage.clear();
    todoList.innerHTML = '';
    showTasks();
}