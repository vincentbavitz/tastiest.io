import NavBar from '../Components/NavBar';
import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>  
        <title>About</title>
        <meta property="og:title" content="About Tastiest" key="title" />
      </Head>
      <NavBar />
      <h1 className="text-center text-xl m-6">About</h1>
    </div>
  );
}