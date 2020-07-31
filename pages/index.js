import "../assets/style.css"
import NavBar from '../Components/NavBar';
import CuisineBar from '../Components/CuisineBar';
import SubscribeToEmailList from '../Components/SubscribeToEmailList';
import Head from 'next/head';

export default function Index() {
  return (
    <div>
      <Head>  
        <title>Tastiest</title>
        <meta property="og:title" content="Tastiest food no matter where you are" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>
      <NavBar />
      <CuisineBar />
      <SubscribeToEmailList />
      <h1 className="text-center text-xl m-20">Home</h1>
    </div>
  );
}

