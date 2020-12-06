import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    // marginLeft: theme.spacing(2),
    flex: 1,
  },
  card: {
    maxWidth: 345,
    minWidth: 345,
    margin: "3%",
    height: 345,
  },
  media: {
    height: 140,
  },
  grid: {
    margin: 0,
    width: "100%",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [{ user, cartProducts, products }, dispatch] = useStateValue();

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar} color="transparent">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Cart
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Checkout
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Grid container justify="center" spacing={3} className={classes.grid}>
          {cartProducts.map((item, index) => {
            return (
              <Grid item key={index} xs="auto">
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Food #{item.id}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton
                      aria-label="Add to Cart"
                      color="inherit"
                      onClick={() => {
                        dispatch({
                          type: actionTypes.SET_CARTPRODUCTS,
                          cartProducts: cartProducts.filter(
                            (product) => product != item
                          ),
                        });
                      }}
                    >
                      <RemoveShoppingCartIcon />
                    </IconButton>
                    <Button size="small" color="primary">
                      Save for later
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Dialog>
    </div>
  );
}
