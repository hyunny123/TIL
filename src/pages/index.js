import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import styles from "./index.module.css";

export default function Home({ results }) {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);
  // console.log(results);
  const router = useRouter();
  const onClick = (id, title) =>
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  return (
    <div className={styles.container}>
      <Seo title="Home" />

      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className={styles.movie}
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
            >
              {movie.original_title}
            </Link>
          </h4>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  //코드는 서버로 돌아감.
  const { results } = await (
    await fetch(`http://localhost:3001/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
