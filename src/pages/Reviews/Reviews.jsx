import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../servises/getRefs';

function Reviews() {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [gotReviews, setGotReviews] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const results = await getMovieReviews(id);
        if (results.length) {
          setResults([...results]);
          setGotReviews(true);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [id]);

  if (gotReviews) {
    return (
      <section>
        <ul>
          {results.map(({ author, id, content }) => (
            <li key={id}>
              <b>Author: {author}</b>
              <p>"{content}"</p>
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    return <p>Sorry, no reviews for this movie</p>;
  }
}

export default Reviews;
// Footer
// © 2023 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
