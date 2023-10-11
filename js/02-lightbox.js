import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');

//Crear los elementos de la galeria
function createGalleryItems() {
    galleryItems.forEach((item) => {
        const galleryItem = document.createElement('li');
        galleryItem.classList.add('gallery__item');

        const galleryLink = document.createElement('a');
        galleryLink.classList.add('gallery__link');
        galleryLink.href = item.original;

        const galleryImage = document.createElement('img');
        galleryImage.classList.add('gallery__image');
        galleryImage.src = item.preview;
        galleryImage.alt = item.description;

        galleryLink.appendChild(galleryImage);
        galleryItem.appendChild(galleryLink);
        gallery.appendChild(galleryItem);
    });
}

// Iniciación de la libreria lightbox
function initializeLightbox() {
    const galleryItems = document.querySelectorAll('.gallery__link');

    new SimpleLightbox(galleryItems, {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
}

// Initialize the gallery and SimpleLightbox
createGalleryItems();
initializeLightbox();

console.log(galleryItems);
