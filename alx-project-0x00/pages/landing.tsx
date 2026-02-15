import React from 'react';
import Head from 'next/head';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <>
      <Head>
        <title>Landing - Airbnb Clone</title>
        <meta name="description" content="Landing page with property listings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Featured Properties</h1>
            <div className="flex gap-4 mb-6">
              <Button title="Small Button" size="small" rounded="rounded-sm" />
              <Button title="Medium Button" size="medium" rounded="rounded-md" />
              <Button title="Large Button" size="large" rounded="rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </>
  );
};

export default Landing;
