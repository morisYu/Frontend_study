const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");
const btn1 = document.querySelector("#popup_btn1");
const btn2 = document.querySelector("#popup_btn2");
const close_btn1 = document.querySelector("#close_btn1");
const close_btn2 = document.querySelector("#close_btn2");
let id1 = document.getElementById('log_id1');
let pass1 = document.getElementById('log_pass1');
let id2 = document.getElementById('log_id2');
let pass2 = document.getElementById('log_pass2');
let log_btn1 = document.querySelector('#log_btn1');
let log_btn2 = document.querySelector('#log_btn2');
var IDs = [];
var PASSs = [];

btn1.addEventListener('click', function() {
    modal1.style.display = 'flex';
    
});

btn2.addEventListener('click', function() {
    modal2.style.display = 'flex';
    
});

close_btn1.addEventListener('click', () => {
    modal1.style.display = 'none';
})

close_btn2.addEventListener('click', () => {
    modal2.style.display = 'none';
})

log_btn1.addEventListener('click', () => {
    console.log('ID: ' + id1.value + ' | PASS: ' + pass1.value);
    id1.value = '';
    pass1.value = '';
})

log_btn2.addEventListener('click', () => {
    IDs.push(id2.value);
    PASSs.push(pass2.value);
    console.log(IDs);
    console.log(PASSs);
    id2.value = '';
    pass2.value = '';

    var storageID = JSON.stringify(IDs);
    var storagePASS = JSON.stringify(PASSs);
    localStorage.setItem('ID', storageID);
    localStorage.setItem('PASS', storagePASS);
})
