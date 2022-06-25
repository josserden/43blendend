import { Container, CountryInfo, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';

export const CountrySearch = () => {
  const [_, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const countryName = searchParams.get('q');

    if (!countryName) return;

    fetchCountry(countryName)
      .then(data => {
        setData(data);
      })
      .catch(() => {
        setSearchParams({});
      });
  }, [searchParams, setSearchParams]);

  const handleSubmit = q => {
    setQuery(searchParams.get('q'));
    setSearchParams({ q });
  };

  return (
    <Section>
      <Container>
        <h1>Country Search</h1>
        <SearchForm onSubmit={handleSubmit} />
        {data &&
          data.map(country => (
            <CountryInfo
              key={country.id}
              flag={country.flag}
              capital={country.capital}
              country={
                country.country === 'Russian Federation'
                  ? 'MURDER'
                  : `${country.country}`
              }
              population={country.population}
              languages={country.languages}
            />
          ))}
      </Container>
    </Section>
  );
};
