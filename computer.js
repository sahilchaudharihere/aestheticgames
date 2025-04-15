let buttons = document.querySelectorAll(".buttons");
 let userturn=true
 const winners  =[[0,1,2 ],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function computerturn(){
  let smartPlayed = computersmartmove();
  if (smartPlayed) return;
let emptybutton=[]
buttons.forEach((btn,index)=>{
    if(btn.innerText==="") emptybutton.push(index)}
 )
 if (emptybutton.length === 0) return;

let randomindx=Math.floor(Math.random () *emptybutton.length )
let compindex=emptybutton[randomindx]

buttons[compindex].innerText ="X"
buttons[compindex].disabled=true
userturn=true
checkwinners()
}

 
for (let btn of buttons) {
    btn.addEventListener("click", () => {
      if (btn.innerText !== "") return; // Prevent overwriting
      if (userturn) {
        btn.innerText = "O";
        btn.disabled=true;
        userturn = false;
        let gameOver = checkwinners();  // ✅ Yeh save kar
        if (gameOver) return;           // ✅ Agar win/draw hai toh computer turn skip
        
        setTimeout(()=>{
          if(!userturn) computerturn();
        }, 1000);
    }

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
    ) {setTimeout(()=>alert(buttons[a].innerText+" is winner"),50)
      buttons.forEach (btn=>btn.disabled=true)
    return true
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
      setTimeout(() => alert("Draw!"), 50);
  return true;
    }
    return false;
    }
     
    
    
    
    
    
    
    
    let reset=document.querySelector(".reset").addEventListener("click" ,()=>{
         for(let btn of buttons ){
    btn.innerText=""
    btn.disabled=false
         }userturn=true
        })
     

function computersmartmove(){

    for (let i=0;i<winners.length;i++){
        let a =winners[i][0]
        let b=winners[i][1]
        let c=winners[i][2]

        let A=buttons[a].innerText
        let B=buttons[b].innerText
        let C=buttons[c].innerText
 
        if(A==="X"&& B==="X" && C===""){ 
            buttons[c].innerText="X"
            buttons[c].disabled=true
            userturn=true
            checkwinners()
            return true;
        }else if(A==="X" && B==="" && C==="X"){
            buttons[b].innerText="X"
            buttons[b].disabled=true
            userturn=true
            checkwinners()
            return true}else if(A===""   &&   B==="X"  && C==="X"){
                buttons[a].innerText="X"
                buttons[a].disabled=true
                userturn=true 
                checkwinners()
                return true}else if(A===""  && B==="O" && C==="O" ){ 
                    buttons[a].innerText="X"
                buttons[a].disabled=true
                userturn=true
                checkwinners()
                return true}
                else if(A==="O" && B===""  && C==="O" ){ 
                    buttons[b].innerText="X"
                buttons[b].disabled=true
                userturn=true
                checkwinners()
                return true}
                else if(A==="O" && B==="O"  && C===""  ){ 
                    buttons[c].innerText="X"
                buttons[c].disabled=true
                userturn=true
                checkwinners()
                return true}   

}
return false
}

 

















         