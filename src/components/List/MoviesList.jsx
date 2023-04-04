// import PropTypes from 'prop-types';
import { List, Item, StyledLink, Title, Poster } from './List.styled';

function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: '/movies' }}>
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
