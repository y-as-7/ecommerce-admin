import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

import {  useRouter } from "next/router";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
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
    <Layout>
      <form onSubmit={createProduct}>
      <h1>New Product</h1>
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
    </Layout>
  );
};

export default NewProduct;
