import Head from "next/head";

interface TitleProps {
  title: string;
}

export default function Seo({ title }: TitleProps) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
