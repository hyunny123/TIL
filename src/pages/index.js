import Head from "next/head";
import Seo from "../../components/Seo";

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Home | Next Movies</title>
      </Head> */}
      <Seo title="Home" />
      <h1>Welcome!HomePage</h1>
    </div>
  );
}
