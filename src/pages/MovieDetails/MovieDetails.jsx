import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from '../../servises/getRefs';
import { RotatingLines } from 'react-loader-spinner';
import { Container } from '../../components/SharedLayout/SharedLayout.styled';
import { Wrapper, StyledList, StyledLink } from './MovieDetails.styled';
import { BackLink } from 'components/BackLink';
function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const backHref =
    location.state?.from ?? '../../components/List/MoviesList.jsx';

  useEffect(() => {
    async function getDetails() {
      try {
        const film = await getMovieDetails(id);
        setMovie(film);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [id]);

  if (isLoaded) {
    return (
      <main>
        <Container>
          <BackLink to={backHref}>Back to movies</BackLink>{' '}
          <Wrapper>
            <img
              src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
              alt={movie.title}
            />

            <div>
              <h1>
                {movie.title} (
                {movie.release_date && movie.release_date.slice(0, 4)})
              </h1>
              <p>User score: {(movie.vote_average * 10).toFixed()}%</p>
              <b>Overview</b>
              <p>{movie.overview}</p>
              <p>
                <b> Genres: </b>
                {movie.genres.length > 3
                  ? movie.genres
                      .slice(0, 3)
                      .map(genre => <span key={genre.id}>{genre.name} </span>)
                  : movie.genres.map(genre => (
                      <span key={genre.id}>{genre.name} </span>
                    ))}
              </p>
            </div>
          </Wrapper>
          <StyledList>
            <li>
              <StyledLink to="cast">Cast</StyledLink>
            </li>
            <li>
              <StyledLink to="reviews">Reviews</StyledLink>
            </li>
          </StyledList>
          <Suspense
            fallback={
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </main>
    );
  }
}
export default MovieDetails;
