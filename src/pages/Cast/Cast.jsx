import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from '../../servises/getRefs';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { List, Item } from './Cast.styled';

function Cast() {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [gotCast, setGotCast] = useState(false);

  useEffect(() => {
    async function fetchCast() {
      try {
        const cast = await getMovieCredits(id);
        setResults([...cast]);
        setGotCast(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [id]);

  if (gotCast) {
    return (
      <section>
        <Container>
          <List>
            {results.map(({ name, character, profile_path, id }) => (
              <Item key={id}>
                <div>
                  <img
                    src={'https://image.tmdb.org/t/p/w200' + profile_path}
                    alt={name}
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <p>
                  <b>Name:</b> {name}
                </p>
                <p>
                  <b>Character:</b> {character}
                </p>
              </Item>
            ))}
          </List>
        </Container>
      </section>
    );
  }
}

export default Cast;
