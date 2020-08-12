import NavBar from '../Components/NavBar';
import Head from 'next/head'

export default function Blog() {
  return (
    <div>
      <Head>  
        <title>Blog</title>
        <meta property="og:title" content="About Tastiest" key="title" />
      </Head>
      <div className="block">
      <NavBar />
      <h1 className="text-xl text-center">Blog</h1>
      </div>
    </div>
  );
}