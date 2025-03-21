let name="";
let shown = false;

function create_name(){
  let first = document.getElementById("firstname").value
  let last = document.getElementById("lastname").value
  name = first + " " + last
  document.getElementById("name").innerHTML = name
  shown = true;
}
function toggle_name(){
  if(shown===false){
    document.getElementById("name").innerHTML = name
    shown = true;
  } else {
    document.getElementById("name").innerHTML = ""
    shown = false;
  }
}

// let num=0

// function minus(){
//   num=num-1;
//   document.getElementById("num").innerHTML = num;
// }

// function plus(){
//   num=num+1
//   document.getElementById("num").innerHTML =num;
// }

// function minus2(){
// num=num-2
// document.getElementById("num").innerHTML=num;
// }

// function plus2(){
//   num=num+2
//   document.getElementById("num").innerHTML=num;
// }

// function reset(){
//   num=0
//   document.getElementById("num").innerHTML=num;

// }
