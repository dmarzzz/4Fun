import React from 'react';

const MovieReviews = () => {
  const movies = [
    { name: 'The Matrix', review: 'A groundbreaking Sci-Fi classic!' },
    { name: 'The Godfather', review: 'A masterpiece in storytelling.' },
    { name: 'Toy Story', review: 'Heartwarming and fun for all ages.' },
    { name: 'Inception', review: 'Mind-bending and visually stunning.' },
    { name: 'The Shawshank Redemption', review: 'A moving story of hope and friendship.' },
  ];

  return (
    <div className="movie-reviews">
      <p>My Movie Reviews:</p>
      <pre>
        +------------------------+-------------------------------------+
        | Movie                  | Thoughts                            |
        +------------------------+-------------------------------------+
        {movies.map((movie) => (
          <React.Fragment key={movie.name}>
            | {movie.name.padEnd(22)} | {movie.review.padEnd(35)} |
          </React.Fragment>
        ))}
        +------------------------+-------------------------------------+
      </pre>
    </div>
  );
};

export default MovieReviews;
