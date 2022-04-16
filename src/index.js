import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import { showToast } from './js/notification';
import { ImageService } from './js/api-service';
import { getRefs } from './js/getRefs';
import { renderGallery } from './js/renderGallery';

const { galleryContainer, loadMoreBtn, searchBar } = getRefs();

searchBar.addEventListener('submit', onSearchSubmit);
loadMoreBtn.addEventListener('click', () => {
  ImageService.getImages().then(res => {
    renderGallery(res.data.photos);
  });
});

function onSearchSubmit(event) {
  event.preventDefault();

  galleryContainer.innerHTML = '';
  ImageService.resetPage();

  ImageService.query = event.target.elements.query.value.trim();

  if (!ImageService.query) return showToast('error', 'Please enter a search query');

  ImageService.getImages()
    .then(res => {
      console.log(res.data);
      renderGallery(res.data.photos);

      showToast('success', 'Success');
    })
    .catch(err => {
      showToast('error', err.message);
      console.error(err);
    });

  searchBar.reset();
}
