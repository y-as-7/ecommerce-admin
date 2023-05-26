import Layout from '@/pages/components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const DeleteProductPage = () => {
    const [productInfo,setProductInfo]=useState()
    const router =useRouter()
    const {id}=router.query;
    useEffect(()=>{
        if (!id) {
            return;
        }
        axios.get('/api/products?id='+id).then(res=>{
            setProductInfo(res.data)
        })
    },[id])
    function goBack(){
        router.push('/products')
    }
    async function deleteProduct(){
      await  axios.delete('/api/products?id='+id)
      goBack();
    }
    return (
        <Layout>
           <h1 className='text-center'> Do you want to delete &nbsp;{productInfo?.title} ?</h1>
           <div className='flex gap-2 justify-center'>
            <button onClick={deleteProduct} className='btn-red'>Yes</button>
            <button className='btn-default' onClick={goBack}>no</button>
           </div>
        </Layout>
    );
}

export default DeleteProductPage;
