import Link from 'next/link';
import React from 'react'
import MainLayout from '../../components/layouts/MainLayout';

const index = () => {
  return (
    <>
      <h1>Pricing Page!</h1>
      <h1 className='title'>
        {/* Ir a <a href="/about">About!</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/pricing/index.jsx</code>
      </p>     
    </>
  )
}

index.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      { page }
    </MainLayout>
  )
};

export default index;