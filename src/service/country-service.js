import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export const getCountries = async () => {
  const { data } = await axios.get('/region/europe');

  const countries = data.map(
    ({ name, capital, flags, population, languages }) => ({
      id: name.common,
      country: name.common,
      flag: flags.png,
      capital,
      population,
      languages,
    }),
  );

  return countries;
};

export const fetchCountry = async name => {
  const { data } = await axios.get(`/name/${name}`);

  const country = data.map(
    ({ name, flags, capital, population, languages }) => ({
      id: name.common,
      country: name.official,
      flag: flags.png,
      capital,
      population,
      languages: Object.values(languages),
    }),
  );

  return country;
};
