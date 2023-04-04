import { endpoint, KEY } from './endpoint';

// getTrends

export async function getTrends() {
  const response = await endpoint(`trending/movie/day?api_key=${KEY}&page=1`);
  return response.data.results;
}

// getSearch
export async function getSearch(inputSearch) {
  const response = await endpoint(
    `search/movie?api_key=${KEY}&query=${inputSearch}&page=1&language=en-US`
  );
  return response.data.results;
}

// getMovieDetails
export async function getMovieDetails(id) {
  const response = await endpoint(`movie/${id}?api_key=${KEY}&language=en-US`);
  return response.data;
}
// getMovieCredits
export async function getMovieCredits(id) {
  const response = await endpoint(
    `movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
}

// getMovieReviews
export async function getMovieReviews(id) {
  const response = await endpoint(
    `movie/${id}/reviews?api_key=${KEY}&page=1&language=en-US&`
  );
  return response.data.results;
}
