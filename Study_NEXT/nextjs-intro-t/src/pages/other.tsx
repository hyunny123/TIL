import styled from "@emotion/styled";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

const OtherContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
`;
const OtherMovieImg = styled.img`
  max-width: 100%;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

const OtherMovieTitle = styled.h4`
  font-size: 18px;
  text-align: center;
`;

type MType = {
  id: string;
  original_title: string;
  poster_path?: string;
};
export default function Other({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const onClick = ({ id, original_title }: MType) => {
    router.push(`/movies/${original_title}/${id}`);
  };
  return (
    <OtherContainer>
      <Seo title="Other" />

      {results?.map((movie) => (
        <div
          onClick={() =>
            onClick({ id: movie.id, original_title: movie.original_title })
          }
          key={movie.id}
        >
          <OtherMovieImg
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <OtherMovieTitle>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              {movie.original_title}
            </Link>
          </OtherMovieTitle>
        </div>
      ))}
    </OtherContainer>
  );
}
export const getServerSideProps: GetServerSideProps<{
  results: MType[];
}> = async () => {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
};
