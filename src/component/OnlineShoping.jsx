import React, { useContext } from "react";
import CartContext from "../ShopingContex";
import { Routes, Route } from "react-router-dom";
import faker from "faker";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography, Grid, CardContent } from "@mui/material";
import { CartState } from "../ShopingContex";

function OnlineShoping() {
  // const {cart,setCart} = useContext(CartContext)

  const { cart, setCart, products } = CartState();
  console.log(products[0].image, "productsproductsproducts");
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "30px" }}>
        React Context Api
      </div>

      <Grid container spacing={1} sx={{ ml: "13px" }}>
        {products?.map((el, i) => (
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ p: 8 }}>
            <Card>
              
              <CardMedia
                sx={{ height: 100 }}
                image={el.image}
              >
                {/* <img src={el.image} alt="log" /> */}
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {el.price}
                </Typography>
              </CardContent>
              <Grid sx={{ml:2,mb:2}}>
              {!cart.includes(el) ? (
               
                <Button  variant="contained" onClick={() => setCart([...cart, el])}>
                  Add to Cart
                </Button>
              ) : (
                <Button
                variant="contained"
                color="error"
                  onClick={() => {
                    setCart(cart.filter((c) => c.id !== el.id));
                  }}
                >
                  Remove from Cart
                </Button>
                
              )}
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default OnlineShoping;
