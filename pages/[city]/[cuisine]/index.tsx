import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { CuisineBar } from '../../../components/CuisineBar';
import { Footer } from '../../../components/Footer';
import NavBar from '../../../components/NavBar';

export default function Cuisine() {
  const router = useRouter();

  console.log(router.query);

  return (
    <>
      {' '}
      <NavBar />
      <CuisineBar />
      <div className="content my-8 px-4"></div>
      <Footer />
    </>
  );
}
