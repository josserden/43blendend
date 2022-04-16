import { getRefs } from './getRefs';
const { galleryContainer } = getRefs();

export const renderGallery = images => {
  const markup = images
    .map(
      ({ photographer, alt, avg_color, photographer_url, src }) => `
    <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
      <div class="bg-white rounded shadow-sm">
        <img
          src="${src.medium}"
          alt=""
          class="img-fluid card-img-top"
        />
        <div class="p-4">
          <h5><a href="${photographer_url}" class="text-dark" target="_blank" rel="noopener noreferrer">${photographer}</a></h5>
          <p class="small text-muted mb-0 text-truncate" style="max-width: 180px;">${alt}</p>
          <div
            class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4 "
          >
            <p class="small mb-0 ">
              <i class="fa fa-picture-o mr-2"></i><span class="font-weight-bold">${avg_color}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    `,
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
};
