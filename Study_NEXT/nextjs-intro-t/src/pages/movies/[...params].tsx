import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import NavBar from "../../../components/NavBar";
import Seo from "../../../components/Seo";

type queryType = {
  params: [title: string, id: string, poster: string];
};

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [title, id, poster] = params;

  return (
    <div>
      <Seo title="other" />
      <NavBar />
      <h1>영화 제목</h1>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.query.params;
  return {
    props: {
      params,
    },
  };
};
