import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Link from "next/link";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    }, []);
  });
  return (
    <Layout>
      <Link
        className="bg-blue-900 rounded-md  text-white py-1 px-2 "
        href={"./products/new"}
      >
        Add new Product
      </Link>
      <table className=" mt-2 basic">
        <thead>
          <tr>
            <td>product name </td>
            <td> </td>
          </tr>
        </thead>
        <tbody>
          {products.map((pro) => (
            <tr>
              <td>{pro.title}</td>
              <td>
                <Link href={"/products/edit/" + pro._id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Products;
