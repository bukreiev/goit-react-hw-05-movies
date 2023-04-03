import { List, Item, Link, Title, Poster } from './List.styled';
import PropTypes from 'prop-types';

function TrendingList({ movies }) {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <Link href={`/movies/${id}`} state={{ from: '/' }}>
              <Poster
                loading="lazy"
                src={'https://image.tmdb.org/t/p/w200' + poster_path}
                alt={title}
              />
              <Title>{title}</Title>
            </Link>
          </Item>
        );
      })}
    </List>
  );
}

TrendingList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TrendingList;
