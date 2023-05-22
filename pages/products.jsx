import React from 'react';
import Layout from './components/Layout';
import Link from 'next/link';

const Products = () => {
    return (
        <Layout>
            <Link className='bg-blue-900 rounded-md  text-white py-1 px-2 ' href={'./products/new'}>Add new Product</Link>
        </Layout>
    );
}

export default Products;
