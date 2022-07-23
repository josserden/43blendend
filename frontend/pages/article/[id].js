import ReactMarkdown from 'react-markdown';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Article({ article: { data } }) {
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h2">
          {data.attributes.title}
        </Typography>

        <ReactMarkdown>{data.attributes.body}</ReactMarkdown>
      </Container>
    </>
  );
}

export const getStaticProps = async (context) => {
  const data = await fetch(
    `http://localhost:1337/api/articles/${context.params.id}`
  );

  const article = await data.json();

  return {
    props: { article },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/articles`);

  const articles = await res.json();

  const paths = articles.data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}
