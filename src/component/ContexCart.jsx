import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography, Grid, CardContent } from "@mui/material";
import { CartState } from "../ShopingContex";

export default function ContexCart() {
  const { cart, setCart } = CartState();

  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "30px" }}>
        React Context Api
      </div>

      {cart.length > 0 ? (
        <Grid container spacing={1} sx={{ ml: "13px" }}>
          {cart?.map((el, i) => (
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{ p: 8 }}>
              <Card>
                <CardMedia
                  sx={{ height: 100 }}
                  image="https://cdn.pixabay.com/photo/2023/07/14/10/30/de-havilland-tiger-moth-8126721_1280.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {el.price}
                  </Typography>
                </CardContent>

                <Button
                  onClick={() => {
                    setCart(cart.filter((c) => c.id !== el.id));
                  }}
                >
                  Delete
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}
