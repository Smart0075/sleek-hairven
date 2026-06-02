const chatBtn = document.getElementById("chatBtn");
const  text = document.getElementById("text");
chatBtn.addEventListener("click",function(){

    if (text.style.display ==="block"){
        text.style.display = "none";
    }else{
        text.style.display = "block"
    }
})
const address = document.getElementById("address");
const headOffice= document.getElementById("headOffice");
address.addEventListener("click", function(){
    if(headOffice.style.display ==="block"){
        headOffice.style.display = "none";
    }else{
        headOffice.style.display ="block"
    }
}

)

 const mode = document.getElementById("mode");
mode.addEventListener("click",function(){
 document.body.classList.toggle("mode")
}
)

const toggleBtn = document.getElementById("toggleBtn");
const hiddenBtn = document.getElementById("hiddenBtn");
hiddenBtn.addEventListener("click", function(){
    
    if(toggleBtn.style.display ==="block"){
        toggleBtn.style.display = 'none'
    }else{
        toggleBtn.style.display = "block"
    }
}

)