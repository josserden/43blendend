import { Container, Grid, GridItem, Section } from 'components';
import { Link } from 'react-router-dom';
import { useFetchCountries } from '../Hooks/useFetchCountries';

export const Home = () => {
  const { countries, error, isLoading } = useFetchCountries();

  return (
    <Section>
      <Container>
        {isLoading && <h1>LOADING...</h1>}
        {error && <h1>{error}</h1>}
        <Grid>
          {countries.length > 0 &&
            countries.map(({ id, flag, country }) => (
              <GridItem key={id}>
                <Link to={`/country/${id}`}>
                  <img src={flag} alt={country} />
                </Link>
              </GridItem>
            ))}
        </Grid>
      </Container>
    </Section>
  );
};
