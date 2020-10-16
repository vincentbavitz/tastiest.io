import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Footer } from '../../../components/Footer';
import { CUISINES } from '../../../constants';
import { generateTitle } from '../../../utils/metadata';
import { titleCase } from '../../../utils/text';

export default function Cuisine() {
  const router = useRouter();
  const { cuisine } = router.query;

  // Ensure cuisine exists on load; else 404
  const cuisineExists = CUISINES.some(
    c => c.name.toLowerCase() === String(cuisine).toLowerCase(),
  );

  useEffect(() => {
    if (!cuisineExists) {
      router.push('/404', '/404');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{generateTitle(String(cuisine))}</title>
      </Head>

      {cuisineExists ? (
        <>
          <div className="content my-8 px-4">
            <h1 className="text-2xl">This is {titleCase(String(cuisine))}</h1>
          </div>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
