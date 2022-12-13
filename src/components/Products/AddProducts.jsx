import { Box, Button, createTheme, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import "./AddProduct.css";
const AddProducts = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    image: "",
    name: "",
    price: 0,
    descr: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };

  return (
    <Box id="addproduct">
      <Typography id="addproductpnl">ADD PRODUCT PANNEL</Typography>
      <TextField
        className="addinp"
        onChange={handleInp}
        type="text"
        name="image"
        placeholder="Enter image"
      />
      <TextField
        className="addinp"
        onChange={handleInp}
        type="text"
        name="name"
        placeholder="Enter name"
      />
      <TextField
        className="addinp"
        onChange={handleInp}
        type="number"
        name="price"
        placeholder="Set Price "
      />
      <TextField
        className="addinp"
        onChange={handleInp}
        type="text"
        name="descr"
        placeholder="Enter description"
      />
      <TextField
        className="addinp"
        onChange={handleInp}
        type="text"
        name="type"
        placeholder="Enter type of product"
      />
      <Button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
        id="addproductbtn"
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProducts;
