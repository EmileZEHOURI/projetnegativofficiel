import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

export const Seo = ({ title, description }: Props) => {
  return (
    <Head>
      <title> Club Basket </title>
      <meta name="description" content="Description..."></meta>
      <meta name="viewport" content="width=device=width, initial-scale=1" />

      <link rel="icon" href="/assets/img-negativ/svg/logo-footer.svg" />
    </Head>
  );
};
