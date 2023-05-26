import Layout from '@/pages/components/Layout';
import ProductForm from '@/pages/components/ProductForm';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const EditProductPgae = () => {
    const router=useRouter();
    const {id}=router.query
    const [productInfo,setProductInfo]=useState(null)

    useEffect(() => { 
        if(!id){
            return;
        }
        axios.get('/api/products?id='+id).then(res=>{
            setProductInfo(res.data);
        })
    }, [id]);
    
    return (
        <Layout>
            <h1>Edit Product</h1>
            {productInfo&& (

            <ProductForm {...productInfo}/>
            )}
        </Layout>
    );
}

export default EditProductPgae;
