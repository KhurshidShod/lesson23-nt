const heroImg = document.querySelector(".heroImg");
const nav = document.querySelector("nav")
document.addEventListener("mousemove", (e) => {
    const speed = heroImg.getAttribute("data-speed");
    const x = (window.innerWidth + e.pageX * speed) / 300;
    const y = (window.innerHeight + e.pageY * speed) / 300;
    heroImg.style.transform = `translateX(${x}px) translateY(${y}px)`
})

window.addEventListener("scroll", () => {
    if(pageYOffset > 100){
        nav.classList.add("shrink");
    } else {
        nav.classList.remove("shrink");
    }
})

window.addEventListener("load", () => {
    document.querySelector(".loader").style.display = "none"
})