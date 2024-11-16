let i = 0;
function rotate(){
  i++;
  const open = document.getElementById("open");
  const left = document.getElementById("left-side");
  const see = document.getElementById("see-letter");

  const triangle = document.getElementById("top");
  if(i === 1){
      triangle.style.animation = "open 1s ease-out forwards";
      open.style.visibility = "hidden";
  }else{
    triangle.style.animation = "none";
    open.style.visibility = "visible";
  }

  left.style.zIndex = "0";

  see.style.zIndex = "2";

}

/*function letter(){
  const name = document.getElementById("name");
  const second = document.getElementById("s-sen");
  const third = document.getElementById("t-sen");
  const hidden = document.getElementsByClassName("hidden");
  const first = document.getElementById("first");
  const envelope = document.getElementById("envelope");
  const container = document.getElementById("container");
  const top = document.getElementById("top");
  const left = document.getElementById("left-side");
  /*envelope.style.display = "";
  /*name.style.width = "95%"
  name.style.height = "fit-content"
  name.style.top = "-600px";
  left.style.marginTop = "150px";
  left.style.zIndex = "1";
  top.style.marginTop = "255px";
  top.style.zIndex = "-1";


  /*container.style.marginBottom = "-1180px";
  container.style.animation = "C-move 1s ease-out forwads";
  name.addEventListener("animationend", () => {
    second.style.display = "block";
    third.style.display = "block";
  });

  name.style.animation = "letter 2s ease-out forwards";
  /*name.style.marginBottom = "100%"; 

  first.style.display = "block"
  hidden.style.display = "block"

}*/


function see(){
  const name = document.getElementById("name");
  const hidden = document.getElementsByClassName("hidden");
  const first = document.getElementById("first");
  const second = document.getElementById("s-sen");
  const third = document.getElementById("t-sen");

  name.style.top = "0%";
  name.style.animation = "letter 2s ease-out forwards"; 
  
  first.style.display = "block";
  /*second.style.animation = "show 1s ease-out forwards";
  third.style.animation = "show 1s ease-out forwards";*/


    second.style.display = "block";
    third.style.display = "block";

    second.style.transition = "4s ease";
    third.style.transition = "4s ease";

}