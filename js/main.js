const heroImg = document.querySelector(".heroImg");
document.addEventListener("mousemove", (e) => {
    const speed = heroImg.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 300;
    const y = (window.innerHeight - e.pageY * speed) / 300;
    heroImg.style.transform = `translateX(${x}px) translateY(${y}px)`
})