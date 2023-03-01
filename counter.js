
let turn ="X"
let win=false;
let draw=false;
let aud=new Audio('pop.mp3');
function changrturn(){
  if(turn=="X"){
    turn="O";
  }
  else if(turn=="O"){
    turn="X"
  }
}
let boxes=document.getElementsByClassName('box');


result.innerHTML="Turn For "+turn;
for(let i=0;i<9;i++){
  boxes[i].onclick=()=>{
    if(boxes[i].innerHTML=="" && !win){
      boxes[i].innerHTML=turn;
      aud.load();
      aud.play();
      changecolor(boxes[i]);
      checkwinner();
     if(!win)checkdraw()
      if(!draw && !win)changrturn();
      if(!win && !draw)result.innerHTML="Turn For "+turn;
    }
  }
}
function checkdraw(){
  let flag=false;
  for(let i=0;i<9;i++){
    if(boxes[i].innerHTML==""){
      flag=true;
    }
  }
  if(!flag){
    result.innerHTML="Match Tie"
    draw=true;
  }
}

function checkwinner(){
  let a=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
  for(let i=0;i<8;i++){
    if(boxes[a[i][0]].innerHTML==boxes[a[i][1]].innerHTML && boxes[a[i][1]].innerHTML==boxes[a[i][2]].innerHTML && boxes[a[i][0]].innerHTML==boxes[a[i][2]].innerHTML && boxes[a[i][0]].innerHTML!=""){
     result.innerHTML="Winner "+turn;
      win=true;
    }
  }
}
reset.onclick=()=>{
  let p=confirm("Do you want to RESET");
  if(p){
    location.reload();
  }
}
function changecolor(a){
  if(a.innerHTML=="X"){
    a.style.color="red";
  }
  if(a.innerHTML=="O"){
    a.style.color="blue";
  }
}
