const accessKey = 'FpFF-hWZxAFshOBDu723NifqFJ5frqKrZBGGYbxRgRc';
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=' + accessKey;


const animalInput = document.getElementById('animal-input');
const searchButton = document.getElementById('search-button');
const imageContainer = document.getElementById('image-container');

searchButton.addEventListener('click', () => {
    const animal = animalInput.value.trim(); // Elimina espacios en blanco al principio y al final
    if (animal === '') {
        alert('Por favor, ingresa el nombre de un animal antes de buscar.');
        return;
    }


    // Realizar una solicitud a la API de Unsplash con el término de búsqueda
    fetch(apiUrl + `&query=${animal}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.small;
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(imageElement);
        })
        .catch(error => {
            console.error('Error al obtener la imagen de Unsplash:', error);
        });
});