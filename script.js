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

    if (sessionStorage.getItem("loadingDone")) {
        document.getElementById("loader").style.display = "none";
        return;
    }

    sessionStorage.setItem("loadingDone", "true");

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

// Navbar aktif saat scroll

const sectionsNav = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sectionsNav.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
const counters = document.querySelectorAll(".counter");

const observerCounter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");

            let count = 0;
            const speed = target / 50;

            const update = () => {
                count += speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }
            };

            update();
            observerCounter.unobserve(counter);
        }
    });
});

counters.forEach(counter => observerCounter.observe(counter));
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 20;
        const rotateX = (0.5 - y / rect.height) * 20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });

});
// ===== TILT CARD UNTUK HP =====

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("touchstart", (e) => {

        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();

        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 12;
        const rotateX = (0.5 - y / rect.height) * 12;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });

    card.addEventListener("touchend", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});
// ===== TOAST NOTIFICATION =====

const toast = document.getElementById("toast");

function showToast(text){

    toast.textContent = text;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);

}
const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const progress = entry.target.querySelector(".progress");
            const percent = entry.target.dataset.percent;

            const radius = 60;
            const circumference = 2 * Math.PI * radius;

            progress.style.strokeDasharray = circumference;
            progress.style.strokeDashoffset =
                circumference - (percent / 100) * circumference;

            skillObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.5
});

skillCards.forEach(card => skillObserver.observe(card));