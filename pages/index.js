import "../assets/style.css"
import NavBar from '../Components/NavBar';
import CuisineBar from '../Components/CuisineBar';
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>  
        <title>Tastiest</title>
        <meta property="og:title" content="Tastiest food no matter where you are" key="title" />
      </Head>
      <NavBar />
      <CuisineBar />
      <h1 className="text-center text-xl m-6">Home</h1>
    </div>
  );
}

