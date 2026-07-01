// javascript id="t9m2k1"
// =========================
// Mobile Menu Toggle
// =========================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("bx-menu");
        menuIcon.classList.toggle("bx-x");
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuIcon.classList.remove("bx-x");
            menuIcon.classList.add("bx-menu");
        });
    });
}

// =========================
// Active Navbar Link on Scroll
// =========================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document
                .querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
        }
    });

    // Sticky Header

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Mobile Menu on Scroll

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// =========================
// Scroll Reveal Animation
// =========================

ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(
    '.home-content, .heading',
    { origin: 'top' }
);

ScrollReveal().reveal(
    '.home-img, .skills-container, .projects-container, .contact form',
    { origin: 'bottom' }
);

ScrollReveal().reveal(
    '.home-content h1, .about-img',
    { origin: 'left' }
);

ScrollReveal().reveal(
    '.home-content p, .about-content',
    { origin: 'right' }
);

// =========================
// Typed JS
// =========================

const typed = new Typed('.multiple-text', {
    strings: [
        'Frontend Developer',
        'BCA Student',
        'JavaScript Learner',
        'Web Designer'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// =========================
// About Read More Toggle
// =========================

const readMoreBtn = document.getElementById("read-more-btn");
const aboutMore = document.querySelector(".about-more");

if (readMoreBtn && aboutMore) {
    readMoreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        aboutMore.classList.toggle("show");

        if (aboutMore.classList.contains("show")) {
            readMoreBtn.textContent = "Read Less";
        } else {
            readMoreBtn.textContent = "Read More";
        }
    });
}

// =========================
// Contact Form Validation
// =========================

const form = document.querySelector('form');

if (form) {

    form.addEventListener('submit', (e) => {

        const inputs = form.querySelectorAll('input, textarea');

        let isEmpty = false;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isEmpty = true;
            }
        });

        if (isEmpty) {
            e.preventDefault();
            alert('Please fill all fields.');
        }
    });
}

