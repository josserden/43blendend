import React, { Component } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

import * as ImageService from 'service/image-service';
import {
  Heading,
  Text,
  Container,
  Section,
  Grid,
  GridItem,
} from 'components/App/App.styled';

export class Gallery extends Component {
  state = {
    images: [],
    query: 'cats',
  };

  async componentDidMount() {
    const { query } = this.state;
    const images = await ImageService.getImages(query);
    this.setState({ images });

    document.title = `Gallery - ${query}`;
  }

  render() {
    const { images, query } = this.state;

    return (
      <Section>
        <Container>
          <Heading textAlign="center">Search for images of {query}</Heading>
          <Text textAlign="center">{images.length} images found</Text>

          <Grid>
            {images.map(({ id, avg_color, alt, src: { large } }) => (
              <GridItem key={id} color={avg_color}>
                <img src={large} alt={alt} />
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Section>
    );
  }
}
