import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const TopContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ categories,filters,sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          categories ?  `http://localhost:5000/api/products?category=${categories}` 
            : "http://localhost:5000/api/products"
        );
        console.log(res);
        setProducts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getProducts();
  }, [categories]);

  useEffect(() => {
    categories && setFilteredProducts(
        products.filter((item) => {
          return(
          Object.entries(filters).every(([key,value]) =>{
            return(
              item[key].includes(value)
            )
          })
        )
  })
      );
  }, [products, categories, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <TopContainer>
      {categories ? filteredProducts.map((item) => (
        <Product item={item} key={item.id} />))
        : products
            .slice(0, 7)
            .map((item) => <Product item={item} key={item.id} />)}
    </TopContainer>
  );
};

export default Products;
