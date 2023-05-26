import Layout from '@/pages/components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

const EditProductPgae = () => {
    const router=useRouter();
    const {id}=router.query
    useEffect(() => {
        axios.get('api/products',)
    }, [id]);
    
    return (
        <Layout>
            edit
        </Layout>
    );
}

export default EditProductPgae;
