import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

// Funcion para crear los elementos de la galeria
function createGalleryItems() {
    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('li');
        galleryItem.classList.add('gallery__item');

        const galleryLink = document.createElement('a');
        galleryLink.classList.add('gallery__link');
        galleryLink.href = item.original;

        const galleryImage = document.createElement('img');
        galleryImage.classList.add('gallery__image');
        galleryImage.src = item.preview;
        galleryImage.setAttribute('data-source', item.original);
        galleryImage.alt = item.description;

        galleryLink.appendChild(galleryImage);
        galleryItem.appendChild(galleryLink);
        gallery.appendChild(galleryItem);
    });
}

// Funcion para abrir el modal de la imagen selecionada.
function openModal(event) {
    event.preventDefault(); 

    if (event.target.tagName === 'IMG') {
        const imageSource = event.target.getAttribute('data-source');
      
        const instance = basicLightbox.create(`
            <img src='${imageSource}' width="800" height="600">
        `);

        instance.show();
    }
}

// agregar un evento de delegacion para el modal
gallery.addEventListener('click', openModal);

// Iniciacion de la galeria
createGalleryItems();

console.log(galleryItems);
