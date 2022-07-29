
//scroll
let scroll = window.document.getElementById("scroll")
let inputCheckbox = document.getElementById('toggle');

scroll.addEventListener('click', clicar)
function clicar() {
    document.body.style.overflow = scroll ? "hidden" : "initial"
    
    scroll =! scroll    
}




/* HOME
function fechar() {
    
    //document.body.style.overflow = show ? "hidden" : "initial"
    if(inputCheckbox.checked === true){
        inputCheckbox.checked = false;
    }
}*/





