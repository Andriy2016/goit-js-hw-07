import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
  };
  
  const galleryItemsMarksup = createGalleryItemsMarksup(galleryItems);
  
  refs.gallery.insertAdjacentHTML('beforeend', galleryItemsMarksup);
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  
  function createGalleryItemsMarksup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
      })
      .join('');
  }
