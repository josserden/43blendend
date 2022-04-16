import axios from 'axios';

const API_KEY = '563492ad6f917000010000017177ac82ad294f609aa250f88e62125c';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;

export const ImageService = {
  _query: '',
  page: 1,

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  getImages() {
    return axios
      .get(`/search?query=${this._query}&page=${this.page}&per_page=15&orientation=landscape`)
      .then(response => {
        this.incrementPage();

        return response;
      });
  },

  get query() {
    return this._query;
  },

  set query(newQuery) {
    this._query = newQuery;
  },
};
