let myscore= document.querySelector("#my-num")
let compscore= document.querySelector("#comp-num")
 
let buttons=document.querySelectorAll(".buttons")

let rest = document.querySelectorAll(".reset")
let userscore=0
let computerscore=0 

let clicksound=new Audio("  click.mp3" )
let victory=new Audio("victory.wav")
let loss=new Audio("loss.wav")



function resetbutton(){
   myscore.textContent=userscore=0
   compscore.textContent=computerscore=0
  }
  
 rest.forEach((reset)=>{
 reset.addEventListener("click",() =>{
    resetbutton()
    clicksound.play()
     return;
 })
  
 })



function updatescore(){
myscore.textContent=userscore
compscore.textContent=computerscore
}



  function computerchoice(){
let option =["rock","paper","scissor"]
let randomindx=Math.floor(Math.random()*3)
  return  option[randomindx] ;
 
  }
 
 let playgame =(userchoice)=>{
 
let compchoice =computerchoice()
 
let winner =getwinner(userchoice,compchoice)
 if(winner===userchoice){
   victory.play()
  userscore++
 }else if(  winner===compchoice){
   loss.play()
  computerscore++
 }updatescore()
  }
function getwinner(user,comp){
if((user==="rock"&&comp==="paper")|| 
(  user==="paper"&&comp==="scissor" )||
(user==="scissor"&&comp==="rock")){
        
    console.log("you won")
    return user;
} else if(user===comp){  
console.log("it is draw")
  return null;

}else{
    console.log("you lose")
     
    return comp;
} 
  
}
  












 buttons.forEach((button)=>{
button.addEventListener("click",()=>{
let userchoice =button.getAttribute("id")
clicksound.play()
    playgame(userchoice);
})

 })













