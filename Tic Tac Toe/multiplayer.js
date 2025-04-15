let buttons = document.querySelectorAll(".buttons");
let turno = true;
const winners  =[[0,1,2 ],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
for (let btn of buttons) {
  btn.addEventListener("click", () => {
    if (btn.innerText !== "") return; // Prevent overwriting
    if (turno) {
      btn.innerText = "O";
      turno = false;
    } else {
      btn.innerText = "X";
      turno = true;
    }btn.disabled=true
     checkwinners();
  });
}
function checkwinners(){
for (let i=0;i<winners.length;i++){
let a =winners[i][0]
let b=winners[i][1]
let c=winners[i][2]

if(buttons[a].innerText!==""&&
  buttons[a].innerText===buttons[b].innerText &&
  buttons[b].innerText===buttons[c].innerText
) {alert("winner") 

for (let i=0;i<buttons.length;i++ ){
  buttons[i].disabled=true
}return;
}
}
   
let allfilled=true
for( let i=0;i<buttons.length;i++){
if(buttons[i].innerText===""){
  allfilled=false;
  break;
}


}
 
if (allfilled){
  alert("draw")
}

}
 







let reset=document.querySelector(".reset").addEventListener("click" ,()=>{
     for(let btn of buttons ){
btn.innerText=""
btn.disabled=false
     }turno=true
    })
 

   










