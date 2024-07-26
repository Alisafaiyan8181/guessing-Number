let ran = Math.floor(Math.random()*20);

document.querySelector('#buttonArea').addEventListener('click',doing);

document.addEventListener('keydown',(e)=>{
   if(e.key == "r"){
      doing()
      }
})
  
function doing(){
   let userGuess = Number(document.querySelector("#userGuess").value);
   let showResult = document.querySelector(".test");
   if(userGuess && userGuess >= 1){
     if(userGuess > ran){
        showResult.innerHTML = "too big";
     }else if(userGuess < ran){
        showResult.innerHTML = "too short";
     }else{
      showResult.innerHTML = "you won"
      
      document.querySelector("#userGuess").disabled = true ; 
      document.querySelector(".test").style.fontSize ="45px" 
      document.querySelector(".test").style.color = "red"
      
      
     }
   }
}
   
   

   

