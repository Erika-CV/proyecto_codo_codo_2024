//icono hamburguesa

const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click",() =>{
    navMenu.classList.toggle("nav-menu_visible");
});




// validacion formulario

var validacion = () => {
    let dato1 = document.forms[0].elements[0].value 
    let dato2 = document.forms[0].elements[1].value 
    let dato3 = document.forms[0].elements[2].value
    let dato4 = document.forms[0].elements[6].value
    let dato5 = document.forms[0].elements[7].value

    if ((dato1 && dato2 && dato3 && dato4 &&dato5) != ""){
        alert(dato1 +"-"+ dato2 + "Se ha registrado con exito") 
    } 
}