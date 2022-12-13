import React, { useEffect, useState } from "react";
import "./Navbar.css";
import image from "../../images/winlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Badge,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { getCountProductsInCart } from "../../helpers/function";
import { useCart } from "../../contexts/CartContextProvider";
import { useContext } from "react";
import { NavbarContext } from "../../contexts/NavbarContextProvider";
import { Box, height } from "@mui/system";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";
function Navbar() {
  const { searchState, setSearchState } = useContext(NavbarContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const addProductToCart = useCart();

  const {
    user: { email },
    handleLogout,
  } = useAuth();

  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  const openSearch = () => {
    setSearchState(!searchState);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  //! SEARCH START

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  //! SEARCH END

  return (
    <div className="navbar">
      <div className="navbar">
        <img
          onClick={() => navigate("/")}
          className="navbar-logo"
          src={image}
          alt=""
        />
        <div className="navbar-mainContent">
          {email === ADMIN ? (
            <div
              onClick={() => navigate("adproduct")}
              className="navbar-mainContent-link"
            >
              ADD PRODUCT
            </div>
          ) : (
            <></>
          )}
          <div
            onClick={() => navigate("products")}
            className="navbar-mainContent-link"
          >
            PRODUCTS
          </div>
          <div
            onClick={() => navigate("/aboutus")}
            className="navbar-mainContent-link"
          >
            ABOUT US
          </div>
          <div
            onClick={() => navigate("/contactus")}
            className="navbar-mainContent-link"
          >
            CONTACT US
          </div>
        </div>
      </div>
      <Box display={searchState ? "flex" : "none"}>
        <Input
          sx={{ backgroundColor: "white", height: "50px", marginTop: "12px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
      </Box>
      <Tooltip>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, width: "40px" }}>
          <AccountCircleIcon sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {email ? (
          <MenuItem onClick={handleLogout}>
            {" "}
            <Typography sx={{ textAlign: "center" }}>Logout</Typography>
          </MenuItem>
        ) : (
          <Link
            to="/auth"
            style={{
              textDecoration: "none ",
              color: "black",
            }}
          >
            <MenuItem onClick={handleLogout}>
              <Typography sx={{ textAlign: "center" }}>login</Typography>
            </MenuItem>
          </Link>
        )}
      </Menu>{" "}
      <div className="navbar-cart">
        <Badge badgeContent={count} color="primary">
          <ShoppingCartIcon onClick={() => navigate("/cart")} />
        </Badge>
      </div>
      <div className="navbar-search">
        <SearchIcon onClick={openSearch} color="white" />
      </div>
    </div>
  );
}

export default Navbar;
