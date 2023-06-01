let input = document.querySelectorAll("input");
// let btn = document.querySelectorAll("button")[1];
let btn = document.querySelectorAll("button")[1];
btn.addEventListener("click", check);
 function check(){
     for(let i=0;i<4;i++){
         if(input[i].value==""){
             input[i].style.border="1px solid red";
             input[i].style.color="red";
            input[i].style.backgroundImage="url(../images/icon-error.svg)";
            console.log(input[i].innerHTML);
         }
         else{
            for(let i = 0; i<input.length; i++){
                input[i].style.color="green";
            }
         }
     }
}
