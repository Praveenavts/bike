let subMenu = document.getElementById("submenu");

function toggleMenu(){
    subMenu.classList.toggle("open");
}


// chatbot

const chatInput=document.querySelector(".chat-input input");
const sendchatBtn=document.querySelector(".chat-input span");
const chatbotToggle=document.querySelector(".chatbot-toggle");

let usermessage;
const handleChat = () =>{
    usermessage=chatInput.value.trim();
    console.log(usermessage);
}

// chatbotToggle.addEventListener('click',()=> document.classList.toggle("show-chatbot"));
sendchatBtn.addEventListener("click",handleChat);

let subMenu1 = document.getElementById("chatbot");
console.log(subMenu1);

function togglemenu(){
    subMenu1.classList.toggle("open3");
}

// carosel

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const slidesToShow = 4; // Number of slides to show at a time
const slideWidth = 100 / slidesToShow; // Percentage width for each slide
const totalSlides = slideCount - slidesToShow;
let index = 0;

document.getElementById('next').addEventListener('click', () => {
    if (index < totalSlides) {
        index++;
    } else {
        index = 0; // Loop back to the start
    }
    updateSlidePosition();
});

document.getElementById('prev').addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = totalSlides; // Loop back to the end
    }
    updateSlidePosition();
});

function updateSlidePosition() {
    const offset = -index * slideWidth;
    slides.style.transform = `translateX(${offset}%)`;
}

// Initialize the position
updateSlidePosition();
