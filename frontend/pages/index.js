import * as React from 'react';
import Head from 'next/head';
import Link from 'next/Link';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home({ list: { data } }) {
  return (
    <>
      <Head>
        <title>Home Page 😉</title>
      </Head>

      <Container maxWidth="sm">
        <Typography variant="h3" component="h2">
          Home Page
        </Typography>

        <ul>
          {data.map(({ id, attributes: { title } }) => (
            <li key={id}>
              <Link href={`/article/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch('http://localhost:1337/api/articles');

  const list = await data.json();

  return {
    props: {
      list,
    },
    revalidate: 1,
  };
};
