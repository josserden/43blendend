import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: ${props => props.theme.breakpoints.s};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: ${props => props.theme.breakpoints.m};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: ${props => props.theme.breakpoints.l};
  }
`;

export const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: 20px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.large};

    margin-bottom: 30px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.xl};

    margin-bottom: 40px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    font-size: ${props => props.theme.fontSizes.xxl};

    margin-bottom: 60px;
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: 20px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.medium};

    margin-bottom: 30px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.large};

    margin-bottom: 40px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    margin-bottom: 60px;
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};

  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: 16px;
  transition: transform 0.3s ease-in-out;

  overflow: hidden;
  cursor: zoom-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
