const chatBtn = document.getElementById("chatBtn");
const  text = document.getElementById("text");
chatBtn.addEventListener("click",function(){

    if (text.style.display ==="block"){
        text.style.display = "none";
    }else{
        text.style.display = "block"
    }
})

 const toggle = document.getElementById("toggle");
toggle.addEventListener("click",function(){
 document.body.classList.toggle("mode")
   
}
)
const p = document.getElementById("p");
const hiddenBtn = document.getElementById("hiddenBtn");
hiddenBtn.addEventListener("click", function(){
    
    if(p.style.display ==="block"){
        p.style.display = 'none'
    }else{
        p.style.display = "block"
    }
}

)