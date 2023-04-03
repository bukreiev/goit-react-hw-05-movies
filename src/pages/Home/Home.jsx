import PropTypes from 'prop-types';
import TrendingList from 'components/List/TrendingList';
import { Container, Title } from './Home.styled';

const Home = ({ movies }) => {
  return (
    <main>
      <Container>
        <Title>Trands for today</Title>
        <TrendingList movies={movies} />
      </Container>
    </main>
  );
};

Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Home;
