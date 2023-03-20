import styled from "@emotion/styled";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";

const IndexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
`;

const MovieImg = styled.img`
  max-width: 100%;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  text-align: center;
`;

type MType = {
  id: number;
  original_title: string;
  poster_path: string;
};

export default function Home() {
  const [movies, setMovies] = useState<MType[]>();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  console.log(movies);

  return (
    <>
      <NavBar />
      <IndexContainer>
        {!movies && <h4>Loading...</h4>}
        {movies?.map((movie) => (
          <Link
            key={movie.id}
            href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.original_title,
              },
            }}
            as={`/movies/${movie.id}`}
          >
            <div className="movie" key={movie.id}>
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <MovieTitle>{movie.original_title}</MovieTitle>
            </div>
          </Link>
        ))}
      </IndexContainer>
    </>
  );
}
