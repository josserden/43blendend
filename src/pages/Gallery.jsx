import React, { Component } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { Button } from 'components';
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
    page: 1,
  };

  componentDidMount() {
    const { query, page, images } = this.state;
    this.getPhotos(query, page);
    document.title = `Gallery - ${query}`;
    console.log(this.state.images);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== this.state.page) {
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    const data = await ImageService.getImages(query, page);
    if (page === 1) {
      this.setState({ images: data.photos });
      return;
    }
    this.setState(prevState => ({
      images: [...prevState.images, ...data.photos],
    }));
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, query, page } = this.state;

    return (
      <Section>
        <Container>
          <Heading textAlign="center">Search for images of {query}</Heading>
          <Text textAlign="center">{images.length} images found</Text>
          <Text textAlign="center">Page {page}</Text>
          <Button onClick={this.onLoadMore}>Load more</Button>
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
