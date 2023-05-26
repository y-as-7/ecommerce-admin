import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const ProductForm = ({title:existingTitle,description:existingDescription, price:existingPrice}) => {
    const [title, setTitle] = useState(existingTitle||'');
    const [description, setDescription] = useState(existingDescription||'');
    const [price, setPrice] = useState(existingPrice||'');
    const[goToProducts,setGoToproducts]=useState(false)
      const  router=useRouter();
   async function createProduct  (ev){
       ev.preventDefault();
       const data = {title,description,price};
       await axios.post('/api/products',data);
       setGoToproducts(true);
       
      }
      if (goToProducts) {
         router.push('/products');
      }
    return (
     
        <form onSubmit={createProduct}>
        
          <label>Product name</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="product name"
          />
          <label>Product description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="description"
          ></textarea>
          <label>Price </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="price"
          />
          <button className="btn-primary">Save</button>
        </form>
      
    );
}

export default ProductForm;
