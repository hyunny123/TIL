import Head from "next/head";
import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import styles from "./index.module.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      {/* <h1>Welcome!HomePage</h1> */}
      {/* {!movies && <h4>Loading...</h4>} */}
      {movies?.map((movie) => (
        <div className={styles.movie} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  //코드는 서버로 돌아감.
}
