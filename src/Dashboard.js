import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import { db, storage, auth, googleProvider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const useStyles = makeStyles((theme) => ({
  basicPaper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  grid: {
    margin: 0,
    width: "100%",
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [{ user, cartProducts, products }, dispatch] = useStateValue();

  // function initialize() {
  //   dispatch({
  //     type: actionTypes.SET_PRODUCTS,
  //     products: Array.from(new Array(20)).map((item, index) => {
  //       return {
  //         image: `https://source.unsplash.com/300x200/?cooked,food&sig=${Math.floor(
  //           Math.random() * 1000000
  //         )}`,
  //         title: "Product",
  //         id: Math.floor(Math.random() * 20),
  //         desc: [
  //           "First, we eat. Then, we do everything else.",
  //           "I’m not drooling, you are!",
  //           "Live, love, eat.",
  //           "Made with love.",
  //           "Good food never fail in bringing people together.",
  //           "The chief ingredient in yummy food is love.",
  //           "Good people, good food, good time.",
  //         ][Math.floor(Math.random() * 7)],
  //       };
  //     }),
  //   });
  // }

  return (
    <div>
      {/* <Paper className={classes.basicPaper}>
        <Button onClick={initialize}>initialize</Button>
      </Paper> */}
      <Grid container spacing={3} justify="center" className={classes.grid}>
        {products.map((item, index) => {
          return (
            <Grid item xs={"auto"}>
              <Card key={index} {...item}></Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Dashboard;
