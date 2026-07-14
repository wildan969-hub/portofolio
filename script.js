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