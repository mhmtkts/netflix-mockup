/* eslint-disable react/prop-types */
import styled from "styled-components";

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieItem = styled.div`
  margin: 1rem;
  width: 150px;
`;

const MovieImage = styled.img`
  width: 100%;
`;

const Movies = ({ movies }) => {
   // movies dizisini döngüye alarak film kartlarını oluşturuyoruz
  return (
    <MovieList>
      {movies.map((movie) => (
        <MovieItem key={movie.id}>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </MovieItem>
      ))}
    </MovieList>
  );
};

export default Movies;
