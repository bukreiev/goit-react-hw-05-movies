import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { getSearch } from 'servises/getRefs';
import { Container, Form, Input, Button } from './Movies.styled';
import MoviesList from '../../components/List/MoviesList';

function Movies() {
  const [result, setResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const searchSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.query.value });
    e.target.reset();
  };

  useEffect(() => {
    async function movieFetch(query) {
      try {
        const result = await getSearch(query.trim());
        if (result.length) {
          setResult([...result]);
          return;
        }
        toast.error(`No no no`);
      } catch (error) {
        console.log(error);
      }
    }
    if (query) {
      movieFetch(query);
    }
  }, [query]);

  return (
    <main>
      <Container>
        <Form onSubmit={searchSubmit}>
          <Input autoComplete="off" name="query" type="text" autoFocus />
          <Button type="submit">Search </Button>
        </Form>
        <MoviesList movies={result} />
      </Container>
    </main>
  );
}

export default Movies;
