import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import "./ProductCard.css";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        marginTop: "d5%",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
      }}
    >
      <img
        className="cardimg"
        sx={{
          marginBottom: "50%",
        }}
        src={item.image}
        alt=""
      />
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        {item.name}
      </Typography>
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        ${item.price}
      </Typography>
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        {item.descr}
      </Typography>
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        {item.type}
      </Typography>
      <Box>
        <Button
          sx={{
            backgroundColor: "white",
            width: "80%",
            color: "black",
            marginTop: "5%",
            marginBottom: "5%",
            fontWeight: "800",
            fontSize: {
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "20px",
            },
          }}
          onClick={() => navigate(`/products/${item.id}`)}
        >
          VIEW
        </Button>
      </Box>
    </div>
    // </div>
  );
};

export default ProductCard;
