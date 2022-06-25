import { Container, Grid, GridItem, Section } from 'components';
import { Link, useLocation } from 'react-router-dom';
import { useFetchCountries } from '../Hooks/useFetchCountries';

export const Home = () => {
  const { countries, error, isLoading } = useFetchCountries();

  const location = useLocation();
  console.log(location);

  return (
    <Section>
      <Container>
        {isLoading && <h1>LOADING...</h1>}
        {error && <h1>{error}</h1>}
        <Grid>
          {countries.length > 0 &&
            countries.map(({ id, flag, country }) => (
              <GridItem key={id}>
                <Link to={`/country/${id}`} state={{ from: location }}>
                  <img src={flag} alt={country} />
                </Link>
              </GridItem>
            ))}
        </Grid>
      </Container>
    </Section>
  );
};
