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
    let dato4 = document.forms[0].elements[3].value
    let dato5 = document.forms[0].elements[8].value
    let dato6 = document.forms[0].elements[9].value
    let dato7 = document.forms[0].elements[10].value


    // Validar que se haya adjuntado una imagen
    if (!imagen) {
        alert("Por favor, adjunta una imagen.");
        return false;
    }

    // Validar el tipo de archivo de la imagen
    var validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (validImageTypes.indexOf(imagen.type) === -1) {
        alert("Por favor, adjunta una imagen en formato JPEG, PNG o GIF.");
        return false;
    }

    // Validar el tamaño de la imagen (máximo 5MB)
    var maxSize = 5 * 1024 * 1024; // 5MB
    if (imagen.size > maxSize) {
        alert("La imagen debe ser menor a 5MB.");
        return false;
    }

    if ((dato1 && dato2 && dato3 && dato4 && dato5 && dato6 && dato7 ) != ""){
        alert(dato1  +"-"+ dato2  +  " Se ha registrado con exito") 
    } 

    // Si todo está bien, permitir el envío del formulario
    return true;
}


//API 
async function currency(from, to, amount) {
    const response = await fetch(`https://www.google.com/finance/converter?a=${amount}&from=${from}&to=${to}`);
    const text = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const resultElement = doc.querySelector('#currency_converter_result span');

    if (resultElement) {
        const result = resultElement.textContent;
        return result.replace(` ${to}`, '');
    } else {
        throw new Error('Conversion result not found');
    }
}

currency('USD', 'DOP', 1)
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
