import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import "./ProductList.css";
const ProductList = ({ currentData }) => {
  return (
    <Box id="products">
      {currentData() ? (
        currentData().map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ProductList;
