const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const darkBtn = document.getElementById("darkBtn");


// Hamburger Menu

menuBtn.onclick = function(){
    navMenu.classList.toggle("active");
};


// Dark Mode

darkBtn.onclick = function(){
    document.body.classList.toggle("dark");
};


// Tutup menu setelah klik link

const menuLink = document.querySelectorAll(".nav-menu a");

menuLink.forEach(link => {

    link.onclick = function(){
        navMenu.classList.remove("active");
    }

});


// Animasi scroll

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";

    observer.observe(section);

});
const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        this.classList.add("clicked");

        setTimeout(() => {
            this.classList.remove("clicked");
        }, 300);
    });
});
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");
    const loadingBar = document.getElementById("loadingBar");
    const loadingText = document.getElementById("loadingText");

    let progress = 0;

    const loading = setInterval(function () {

        progress++;

        loadingBar.style.width = progress + "%";
        loadingText.textContent = progress + "%";

        if (progress >= 100) {

            clearInterval(loading);

            setTimeout(function () {
                loader.classList.add("hide");
            }, 300);

        }

    }, 15);

});
const text = "Fresh Graduate SMK Jurusan Teknik Komputer dan Jaringan (TKJ)";
const typing = document.getElementById("typing");

let index = 0;

function ketik() {

    if(index < text.length){
        typing.textContent += text.charAt(index);
        index++;
        setTimeout(ketik, 40);
    }

}

ketik();