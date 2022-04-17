import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import { LoadMoreBtn } from './js/loadMoreBtn';
import { showToast } from './js/notification';
import { ImageService } from './js/api-service';
import { getRefs } from './js/getRefs';
import { renderGallery } from './js/renderGallery';

const { galleryContainer, searchBar } = getRefs();

const loadMoreBtn = new LoadMoreBtn({
  selector: '.js-btn',
  className: 'd-none',
  onClick: () => {
    onLoadImages().catch(err => {
      showToast('error', err.message);
      console.error(err);
    });
  },
});

loadMoreBtn.hide();

searchBar.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(event) {
  event.preventDefault();

  galleryContainer.innerHTML = '';
  ImageService.resetPage();

  ImageService.query = event.target.elements.query.value.trim();

  if (!ImageService.query) return showToast('error', 'Please enter a search query');

  onLoadImages()
    .then(() => {
      loadMoreBtn.show();
      showToast('success', 'Success');
    })
    .catch(err => {
      showToast('error', err.message);
      console.error(err);
    });

  searchBar.reset();
}

function onLoadImages() {
  return ImageService.getImages().then(({ photos, isOver }) => {
    console.log(photos);
    if (!isOver) {
      loadMoreBtn.hide();
      showToast('warning', 'No more images to load');
      return;
    }

    if (!photos.length) return showToast('error', 'No images found');

    renderGallery(photos);
  });
}
