import { Box, Button, createTheme, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import "./AddProduct.css";
const EditProduct = () => {
  const { productDetails, getProductDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);
  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const navigate = useNavigate();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 425,
        sm: 750,
        md: 960,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const handleInp = (e) => {
    let obj = { ...product, [e.target.name]: e.target.value };
    setProduct(obj);
  };
  return (
    <Box id="addproduct">
      <Typography
        id="addproductpnl"
        sx={{
          color: "white",
          fontSize: "30px",
          [theme.breakpoints.down("sm")]: {
            color: "black",
            fontSize: "24px",
          },
        }}
      >
        EDIT PRODUCT PANNEL
      </Typography>
      <TextField
        className="addinp"
        onChange={handleInp}
        type="text"
        name="image"
        placeholder="Enter new image"
        value={product.image || ""}
      />
      <TextField
        className="addinp"
        onChange={handleInp}
        type="text"
        name="name"
        placeholder="Enter new  name"
        value={product.name || ""}
      />
      <TextField
        className="addinp"
        onChange={handleInp}
        type="number"
        name="price"
        placeholder="Set Price "
        value={product.price || ""}
      />
      <TextField
        className="addinp"
        onChange={handleInp}
        type="text"
        name="descr"
        placeholder="Enter description"
        value={product.descr || ""}
      />
      <TextField
        className="addinp"
        onChange={handleInp}
        type="text"
        name="type"
        placeholder="Enter type of product"
        value={product.type || ""}
      />
      <Button
        onClick={() => {
          saveEditedProduct(product, id);
          navigate("/products");
        }}
        id="addproductbtn"
      >
        SAVE CHANGES
      </Button>
    </Box>
  );
};

export default EditProduct;
