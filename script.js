// CUSTOM CURSOR

// CUSTOM CURSOR - Optimized
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    // We subtract half the width/height (7px) to center it
    // translate3d is much smoother than top/left
    cursor.style.transform = `translate3d(${e.clientX - 7}px, ${e.clientY - 7}px, 0)`;
});


// Update the expansion logic to handle the transform better
const hoverElements = document.querySelectorAll("a, .btn, .card, .owner");

hoverElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("expand");
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("expand");
    });
});



// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal")

function revealOnScroll() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight
        const revealTop = section.getBoundingClientRect().top

        if (revealTop < windowHeight - 120) {
            section.classList.add("active")
        }

    })

}

window.addEventListener("scroll", revealOnScroll)



// NAVBAR ACTIVE LINK

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", () => {

    let current = ""

    sections.forEach(section => {

        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id")
        }

    })

    navLinks.forEach(link => {

        link.classList.remove("active")

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active")
        }

    })

})



// PARALLAX HERO

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero")

    let offset = window.pageYOffset

    hero.style.backgroundPositionY = offset * 0.4 + "px"

})