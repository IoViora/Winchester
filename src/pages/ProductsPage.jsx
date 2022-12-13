import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "../components/Products/ProductList";
import ProductSortPagination from "../components/Products/ProductSortPagination";
import { useProducts } from "../contexts/ProductContextProvider";
import "./ProductPage.css";
const ProductsPage = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const count = Math.ceil(products.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  //! SEARCH START
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);
  //! SEARCH END

  return (
    <div className="upbody">
      <ProductSortPagination page={page} setPage={setPage} count={count} />
      <ProductList currentData={currentData} />
    </div>
  );
};

export default ProductsPage;
