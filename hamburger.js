let hamburger = document.querySelector(".s-hamburger");
const hamburgerToggle = () => {
    hamburger.addEventListener("click", () => {
        let innerCircle = document.querySelector(".h-inner-circle");
        let lineH = document.querySelector(".h-lineH");
        let lineV = document.querySelector(".h-lineV");

        hamburger.classList.toggle("s-hamburger-active");
        lineH.classList.toggle("s-line-active")
        lineV.classList.toggle("s-line-active");
    });
}
hamburgerToggle();