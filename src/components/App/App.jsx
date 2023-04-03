import { lazy, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { getTrends } from 'servises/getRefs';
import { SharedLayout } from '../SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../../pages/Cast/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews/Reviews'));

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrends() {
      try {
        const trends = await getTrends();
        setMovies([...trends]);
      } catch {
        toast.error('Something went wrong. Try again later.');
      }
    }
    fetchTrends();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home movies={movies} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home movies={movies} />} />
      </Route>
    </Routes>
  );
};
