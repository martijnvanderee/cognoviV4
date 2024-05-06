import React from 'react';
import Link from 'next/link';
//components
import { Layout } from '../components/layout';
import { SeoHeader } from '../components/seoHeader';
//variables
import { PAGE404 } from '../public/variables';
import Image from 'next/image';

const Custom404 = () => (
  <Layout>
    <SeoHeader subtitle="Er ging iets mis de pagina kan niet worden gevonden " />
    <main className="bg-white">
      <div className="mt-16 mx-8">
        <Image alt="error image" src="404.png" className="mx-auto mb-8"></Image>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl">
            {PAGE404().title}
          </h2>
          <p className="text-lg mb-4 md:text-2xl">{PAGE404().subtitle}</p>
          <div className="">
            <Link href="/">
              <button
                aria-label="Return"
                className="bg-purple text-white text-xl
       font-bold py-2 px-3 rounded ml-1 self-center "
              >
                {PAGE404().textLink}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  </Layout>
);

export default Custom404;
