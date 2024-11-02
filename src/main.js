import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import './css/styles.css';
import './css/loader.css';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showLoader() {
  loaderContainer.classList.remove('is-hidden');
}

function hideLoader() {
  loaderContainer.classList.add('is-hidden');
}

searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  const form = e.currentTarget;
  const query = form.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  try {
    showLoader();
    gallery.innerHTML = '';

    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    renderGallery(data.hits, gallery);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'An error occurred while fetching images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
});
