import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Footer } from '../../../components/Footer';
import { CUISINES, CuisineSymbol } from '../../../constants';
import { generateTitle } from '../../../utils/metadata';
import { titleCase } from '../../../utils/text';

export default function Cuisine() {
  const router = useRouter();
  const cuisineName = router.query?.cuisine;
  const cuisine = CUISINES[CuisineSymbol[String(cuisineName).toUpperCase()]];

  // Ensure cuisine exists on load; else 404
  const cuisineExists = Boolean(cuisine);

  useEffect(() => {
    if (!cuisineExists) {
      router.push('/404', '/404');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{generateTitle(titleCase(String(cuisine)))}</title>
      </Head>

      {cuisineExists && (
        <>
          <div className="w-full">{cuisine.pageSvg}</div>
          <Footer />
        </>
      )}
    </div>
  );
}
