import { Box, Button, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { ADMIN } from "../../../helpers/consts";
import ProductCounter from "./ProductCounter";
const ProductDetails = () => {
  const navigate = useNavigate();
  const { getProductDetails, productDetails, deleteProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  //!AUTH START
  const {
    user: { email },
  } = useAuth();
  //! AUTH END

  return (
    <div>
      <Grid sx={{ mb: "50px", mt: "50px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              onClick={() => navigate("/products")}
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#0a203f",
                width: "100px",
                height: "50px",
              }}
            >
              BACK
            </Button>
            {email === ADMIN ? (
              <>
                <Button
                  onClick={() => navigate(`/edit/${id}`)}
                  variant="contained"
                  sx={{
                    color: "black",
                    backgroundColor: "whitesmoke",
                    width: "100px",
                    height: "50px",
                  }}
                >
                  EDIT PRODUCT
                </Button>
                <Button
                  onClick={() => {
                    deleteProduct(id);
                    navigate(`/products`);
                  }}
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    width: "100px",
                    height: "50px",
                  }}
                >
                  DELETE PRODUCT
                </Button>
              </>
            ) : (
              <></>
            )}
          </Grid>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom variant="h3" component="div">
              <img src={productDetails.image} alt="" />
            </Typography>
          </Box>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardContent
              sx={{
                width: "100%",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <Typography gutterBottom variant="h3" component="div">
                {productDetails.name}
              </Typography>
              <Typography sx={{ fontSize: "25px", color: "green" }}>
                ${productDetails.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetails.description}
              </Typography>
            </CardContent>
          </Box>
        </Box>
        <ProductCounter />
      </Grid>
    </div>
  );
};

export default ProductDetails;
