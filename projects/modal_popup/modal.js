const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");
const btn1 = document.querySelector("#popup_btn1");
const btn2 = document.querySelector("#popup_btn2");
const close_btn = document.querySelector(".close");

btn1.addEventListener('click', function() {
    modal1.style.display = 'flex';
});

close_btn.addEventListener('click', () => {
    modal1.style.display = 'none';
})

