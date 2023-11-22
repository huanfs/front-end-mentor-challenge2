let input = document.querySelectorAll("input");
// let btn = document.querySelectorAll("button")[1];
let btn = document.querySelectorAll("button")[1];
btn.addEventListener("click", checkAll);
input.forEach((x)=>{
    x.addEventListener("blur", checkItem);
})
function checkAll(){
    for(let i=0;i<4;i++){
        if(input[i].value==""){
            input[i].style.border="1px solid red";
            input[i].style.color="red";
            input[i].style.backgroundImage="url(../images/icon-error.svg)";
        }
        else{
            for(let i = 0; i<4; i++){
                input[i].style.borderColor="green";
            }
        }
     }
}

function checkItem(item){
    if(item.target.value==""){
        item.target.style.borderColor="red";
        item.target.style.backgroundImage="url(../images/icon-error.svg)";
    }
    else if(item.target.value!=""){
        item.target.style.borderColor="green";
    }
}
