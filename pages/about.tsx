import Head from 'next/head';
import { generateTitle } from '../utils/metadata';

function About() {
  return (
    <div>
      <Head>
        <title>{generateTitle('About')}</title>
      </Head>

      <h1 className="m-6 text-xl text-center">About</h1>
    </div>
  );
}

export default About;
