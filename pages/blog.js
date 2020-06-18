import NavBar from '../Components/NavBar';
import Head from 'next/head'

export default function Blog() {
  return (
    <div>
      <Head>  
        <title>Blog</title>
        <meta property="og:title" content="About Tastiest" key="title" />
      </Head>
      <NavBar />
      <h1 className="text-center text-xl m-6">Blog</h1>
    </div>
  );
}