import React from "react";
import { Button, Grid } from "@mui/material";
import CommonStyles from "../styles/CommonStyles";
import { NavLink } from "react-router-dom";
import { CartState } from "../ShopingContex";
export default function Header() {
  const classes = CommonStyles();
  const { cart } = CartState();
  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "80px", backgroundColor: "#E5E7E7", pl: 2 }}
    >
      <NavLink to="/OnlineShoping">
        <Button
          sx={{
            color: "black",
            borderRadius: "10%",
            height: "50px",
            marginTop: "22px",
          }}
        >
          OnLine Shoping
        </Button>
      </NavLink>
      <NavLink to="/ContexCart">
        <Button
          sx={{
            color: "black",
            borderRadius: "10%",
            height: "50px",
            marginTop: "22px",
          }}
        >
          Cart{" "}
          {cart.length > 0 && (
            <span style={{ color: "red" }}>({cart.length})</span>
          )}
        </Button>
      </NavLink>
    </Grid>
  );
}
