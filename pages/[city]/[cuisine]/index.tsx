import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { CuisineBar } from '../../../components/CuisineBar';
import { Footer } from '../../../components/Footer';
import NavBar from '../../../components/NavBar';
import { titleCase } from '../../../utils/text';

export default function Cuisine() {
  const router = useRouter();

  const { cuisine } = router.query;

  return (
    <>
      {' '}
      <NavBar />
      <CuisineBar />
      <div className="content my-8 px-4">
        <h1 className="text-2xl">This is {titleCase(String(cuisine))}</h1>
      </div>
      <Footer />
    </>
  );
}
