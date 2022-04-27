function toggle() {
  let element = document.querySelector(".all_btn");
  let print = document.querySelector("#print_box");
  let links = document.querySelectorAll("a");
  let allButton = document.querySelectorAll(".all_btn")

  console.log(element.value);
  if (element.value == "all_night") {
    print.style.backgroundColor = "rgba(166, 166, 166, 0.5)";
    print.style.color = "rgba(255, 0, 221, 0.8)";
    document.querySelector('body').style.backgroundColor="black";

    for(let i=0;i<allButton.length;i++){
        allButton[i].value = "all_day";
    }
    for(let i=0;i<links.length;i++){
        links[i].style.color="powderblue";
    }
  } else {
    print.style.backgroundColor = "white";
    print.style.color = "black";
    document.querySelector('body').style.backgroundColor="white";
    for(let i=0;i<allButton.length;i++){
        allButton[i].value = "all_night";
    }
    for(let i=0;i<links.length;i++){
        links[i].style.color="black";
    }
  }
}
