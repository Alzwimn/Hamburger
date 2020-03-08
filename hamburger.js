let hamburger = document.querySelector(".s-hamburger");
let clicked = false;
const hamburgerToggle = () => {
    hamburger.addEventListener("click", () => {
        let innerCircle = document.querySelector(".h-inner-circle");
        let lineH = document.querySelector(".h-lineH");
        let lineV = document.querySelector(".h-lineV");
        
        if(!clicked){
            clicked = true;
            hamburger.classList.add("s-hamburger-active");
            hamburger.classList.remove("s-hamburger-active-reverse");

            lineH.classList.add("s-line-active");
            lineH.classList.remove("s-line-active-reverse");

            lineV.classList.add("s-line-active");
            lineV.classList.remove("s-line-active-reverse");

        }else{
            clicked = false;
            hamburger.classList.add("s-hamburger-active-reverse");
            hamburger.classList.remove("s-hamburger-active");

            lineH.classList.add("s-line-active-reverse");
            lineH.classList.remove("s-line-active");

            lineV.classList.add("s-line-active-reverse");
            lineV.classList.remove("s-line-active");
        }
        //hamburger.classList.toggle("s-hamburger-active");
        //lineH.classList.toggle("s-line-active")
        //lineV.classList.toggle("s-line-active");
    });
}
hamburgerToggle();