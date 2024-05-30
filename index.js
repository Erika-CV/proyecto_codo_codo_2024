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


// api rest
const api_key = "DEMO_API_KEY";
const url = `https://api.thecatapi.com/v1/images/search?limit=20`;

function fetchImages() {
    fetch(url, {
        headers: {
            'x-api-key': api_key
        }
    })
    .then((response) => response.json())
    .then((data) => {
        displayImages(data);
    })
    .catch((error) => {
        console.log(error);
    });
}

function displayImages(imagesData) {
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; // vaciar el grid antes de agragr imagenes

    imagesData.forEach(function(imageData) {
        let image = document.createElement('img');
        image.src = `${imageData.url}`;
        
        let gridCell = document.createElement('div');
        gridCell.classList.add('col');
        gridCell.classList.add('col-lg');
        gridCell.appendChild(image);
        
        grid.appendChild(gridCell);
    });
}

// Fetch and display imagenes cuando se carga la pagina
window.onload = fetchImages;

// Fetch and display images cuando se hace click en el boton
document.getElementById('refresh-button').addEventListener('click', fetchImages);
