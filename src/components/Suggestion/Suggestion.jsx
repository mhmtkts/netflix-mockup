/* eslint-disable react/prop-types */
import styled from "styled-components";
import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  color: white;
  text-align: left;
`;

function Suggestion(props) {
  const [movies, setMovies] = useState([]);
  const { suggestion } = props;
  const { title } = suggestion;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular`,
          {
            params: {
              api_key: "d7f4af52a1bfaee6b49b5ff92233d57b",
              language: "en-US",
              page: Math.floor(Math.random() * 10) + 1,
            },
          }
        );

        const random = Math.floor(
          Math.random() * (response.data.results.length - 6)
        );
        setMovies(response.data.results.slice(random, random + 8));
      } catch (error) {
        console.warn(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Card>
      <Title>{title}</Title>
      <Movies movies={movies} />
    </Card>
  );
}

export default Suggestion;
