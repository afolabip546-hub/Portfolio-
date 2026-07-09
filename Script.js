const words = [
    "Student",
    "Web Developer",
    "Graphics Designer",
    "Frontend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex > currentWord.length) {
        isDeleting = true;
        speed = 1500;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
