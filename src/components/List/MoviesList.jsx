// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, Item, StyledLink, Title, Poster } from './List.styled';

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <Poster
                loading="lazy"
                src={'https://image.tmdb.org/t/p/w200' + poster_path}
                alt={title}
              />
              <Title>{title}</Title>
            </StyledLink>
          </Item>
        );
      })}
    </List>
  );
}

export default MoviesList;
