const chatBtn = document.getElementById("chatBtn");
const  text = document.getElementById("text");
chatBtn.addEventListener("click",function(){

    if (text.style.display ==="block"){
        text.style.display = "none";
    }else{
        text.style.display = "block"
    }
})

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const dot = document.querySelectorAll(".dot");

let index = 0

function showSlide(){
    slides.style.transform = `translate(-${index * 100}%)`;

dot.forEach(dot => dot.classList. remove("active")); {
  dot[index].classList.add("active")  
}
}

function nextSlide(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    showSlide()

}

function prevSlide(){
    index--;

    if(index < 0){
        index = images.length - 1
    }
    showSlide()
}

let autoSlide = setInterval(nextSlide,3000);
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click",prevSlide);

const slider = document.querySelector(".slider");
slider.addEventListener("mouseenter",() => {
    clearInterval(autoSlide);
})

slider.addEventListener("mouseleave", () =>{
    autoSlide = setInterval(nextSlide, 3000);
})

dot.forEach(dot =>{
    dot.addEventListener("click", () => {

    } )
})
showSlide();
