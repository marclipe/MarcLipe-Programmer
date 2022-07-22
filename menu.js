let show = true;

const menu = document.querySelector("")
const menuToggle = menu.querySelector(".toggle")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menu.classList.toggle("on", show);
    show = !show;
})

/* HOME*/
function fechar() {
    let inputCheckbox = document.getElementById('toggle');
    document.body.style.overflow = show ? "hidden" : "initial"
    if(inputCheckbox.checked === true){
        inputCheckbox.checked = false;
    }
}




