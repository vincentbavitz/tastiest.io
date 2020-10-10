import Head from 'next/head';

export default function About(): JSX.Element {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta property="og:title" content="About Tastiest" key="title" />
      </Head>

      <h1 className="text-center text-xl m-6">About</h1>
    </div>
  );
}
