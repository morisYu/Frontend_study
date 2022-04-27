// NIGHT/DAY mode button
function toggle(){
    let element = document.querySelector("#_btn");
    let backGround = document.querySelector(".wrapper");
    let everyLink = document.querySelectorAll("a");
    let part_title = document.querySelectorAll("._text");

    if(element.value == 'night'){
        backGround.style.backgroundColor="black";
        backGround.style.color="white";
        for(let i=0;i<everyLink.length;i++){
            everyLink[i].style.color="yellow";
        }
        for(let i=0;i<part_title.length;i++){
            part_title[i].style.color="powderblue";
        }
        element.value='day';
    }else{
        backGround.style.backgroundColor="beige";
        backGround.style.color="black";
        for(let i=0;i<everyLink.length;i++){
            everyLink[i].style.color="black";
        }
        for(let i=0;i<part_title.length;i++){
            part_title[i].style.color="rgb(188, 130, 242)";
        }
        element.value='night';
    }
}


