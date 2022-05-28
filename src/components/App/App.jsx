import { Section, Heading, Container } from './App.styled';
import { Test } from 'components';

export const App = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading>Hello World</Heading>
        </Container>
      </Section>

      <Test />
    </>
  );
};
