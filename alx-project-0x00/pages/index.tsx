import React from 'react';
import Head from 'next/head';
import Button from '@/components/Button';

const Home = () => {
  return (
    <>
      <Head>
        <title>Airbnb Application Clone</title>
        <meta name="description" content="Airbnb Application Clone system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Airbnb Application Clone system
          </h1>
          <Button title="Get Started" size="large" rounded="rounded-full" />
        </div>
      </main>
    </>
  );
};

export default Home;
