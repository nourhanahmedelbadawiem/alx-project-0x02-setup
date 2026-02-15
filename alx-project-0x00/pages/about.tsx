import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About - Airbnb Clone</title>
        <meta name="description" content="About page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900">About</h1>
      </main>
    </>
  );
};

export default About;
