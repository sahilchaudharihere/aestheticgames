 let buttons=document.querySelectorAll( ".buttons")
let special=document.querySelectorAll(".sp")
let sps=document.querySelector(".sps")
let screen=document.querySelector("#screen")

buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let value=e.target.innerText;
            if(value==="AC"){
                screen.value="";
            }else if(value==="DEL"){
                screen.value=screen.value.slice(0,-1);
            }else if (value === "%") {
                screen.value = screen.value + "/100";
            }else if(value==="="){
                try{
                    screen.value=eval(screen.value.replace("x","*"))
                }catch(err){
                    screen.value=("error")
                }
            } else{screen.value+=value;}
         
    })
})
