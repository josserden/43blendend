import { Container, CountryInfo, Section } from 'components';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useFetchCountry } from '../Hooks/useFetchCountry';

export const Country = () => {
  const location = useLocation();
  const { country, error, isLoading } = useFetchCountry();
  console.log(location);

  const goBackLink = location?.state?.from ?? '/';

  return (
    <Section>
      <Container>
        <Link to={goBackLink}>Back to Countries</Link>
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
