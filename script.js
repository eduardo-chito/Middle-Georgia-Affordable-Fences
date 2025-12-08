// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    // Close menu when clicking a link (on mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });
}

// Smooth scroll helper
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80; // adjust for sticky header
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = rect.top + scrollTop + yOffset;

    window.scrollTo({
        top: targetY,
        behavior: "smooth",
    });
}

// Set year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Simple gallery carousel
const gallerySlides = document.querySelectorAll(".gallery-slide");
const prevArrow = document.querySelector(".gallery-arrow.prev");
const nextArrow = document.querySelector(".gallery-arrow.next");
const dots = document.querySelectorAll(".gallery-dots .dot");

if (gallerySlides.length && prevArrow && nextArrow) {
    let currentSlide = 0;

    function showSlide(index) {
        if (index < 0) {
            index = gallerySlides.length - 1;
        } else if (index >= gallerySlides.length) {
            index = 0;
        }
        currentSlide = index;

        gallerySlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentSlide);
        });

        if (dots.length) {
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === currentSlide);
            });
        }
    }

    prevArrow.addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    nextArrow.addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const index = parseInt(dot.dataset.slide, 10);
            showSlide(index);
        });
    });
}
