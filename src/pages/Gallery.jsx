import React, { Component } from 'react';

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
    const images = await ImageService.getImages(this.state.query);
    this.setState({ images });

    console.log(images);
  }

  render() {
    const { images } = this.state;
    return (
      <Section>
        <Container>
          <Heading textAlign="center">Search for images of cats</Heading>
          <Text textAlign="center">{images.length} images found</Text>

          <Grid>
            {images.map(image => (
              <GridItem key={image.id} color={image.avg_color}>
                <img src={image.src.large} alt={image.alt} />
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Section>
    );
  }
}
