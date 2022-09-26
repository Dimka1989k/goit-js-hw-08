import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

const createGalleryTemplate = ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
`;

const getImagesGallery = images =>
  images.map(item => createGalleryTemplate(item)).join('');

gallery.innerHTML = getImagesGallery(galleryItems);
gallery.addEventListener('click', handleClick);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'top',
});

function handleClick(e) {
  e.preventDefault();
}
console.log(galleryItems);
