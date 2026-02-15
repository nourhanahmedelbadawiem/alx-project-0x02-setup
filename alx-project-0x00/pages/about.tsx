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
        <div className="max-w-2xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to our Airbnb Application Clone system. This is a demonstration
            of a modern web application built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
