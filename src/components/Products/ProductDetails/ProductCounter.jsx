import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../../contexts/CartContextProvider";
const ProductCounter = () => {
  const { productDetails, setProductDetails } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount((prev) => (prev += 1));
  };

  const decrement = () => {
    count >= 1 ? setCount((prev) => (prev -= 1)) : setCount(0);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: "10px",
          margin: "15px",
          padding: "20px",
        }}
      >
        <Box
          className="counter_button"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            width: "120px",
            height: "50px",
            marginTop: "1px",
            marginRight: "15px",
          }}
        >
          <div>
            <RemoveIcon
              className="remove_icon"
              onClick={() => decrement()}
              sx={{ marginRight: "6px" }}
            />
          </div>
          <div>
            <div>{count}</div>
          </div>
          <div>
            <AddIcon
              className="add_icon"
              onClick={increment}
              sx={{ marginLeft: "6px" }}
            />
          </div>
        </Box>
        {checkProductInCart(productDetails.id) ? (
          <Button
            variant="contained"
            onClick={() => addProductToCart(productDetails)}
            sx={{
              backgroundColor: "#0a203f",
              color: "white",
              width: "300px",
              height: "55px",
              // mb: "50px",
              borderRadius: "1px",
              font: "16px",
              fontWeight: "600",
            }}
          >
            ALREADY IN CART
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => addProductToCart(productDetails)}
            sx={{
              backgroundColor: "#0a203f",
              color: "white",
              width: "300px",
              height: "55px",
              borderRadius: "1px",
              font: "16px",
              fontWeight: "600",
            }}
          >
            ADD TO CART
          </Button>
        )}
      </Box>
    </div>
  );
};

export default ProductCounter;
