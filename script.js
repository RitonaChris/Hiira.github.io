let name="";
let shown = false;

function create_name(){
  let first = document.getElementById("username").value
  user = first + " checked out a book."
  document.getElementById("user").innerHTML = user
  shown = true;
  hideshow('staff')
}
function toggle_name(){
  if(shown===false){
    document.getElementById("user").innerHTML = user
    shown = true;
  } else {
    document.getElementById("user").innerHTML = ""
    shown = false;
  }
}

function hideshow(id){
  var el = document.getElementById(id);
  if (el)
  {
      el.style.display = (el.style.display === 'none') ? 'block' : 'none';
  }
  return false;
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
