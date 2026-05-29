const chatBtn = document.getElementById("chatBtn");
const  text = document.getElementById("text");
chatBtn.addEventListener("click",function(){

    if (text.style.display ==="block"){
        text.style.display = "none";
    }else{
        text.style.display = "block"
    }
})
     
