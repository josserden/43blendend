import { Container, CountryInfo, Section } from 'components';
import { Navigate } from 'react-router-dom';
import { useFetchCountry } from '../Hooks/useFetchCountry';

export const Country = () => {
  const { country, error, isLoading } = useFetchCountry();

  return (
    <Section>
      <Container>
        {error && <Navigate to="/" replace />}
        {isLoading && <h1>LOADING...</h1>}
        {country &&
          country.map(country => (
            <CountryInfo
              key={country.id}
              flag={country.flag}
              capital={country.capital}
              country={
                country.country === 'Russian Federation'
                  ? 'MORDOR'
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
