import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { animalData } from "../data.js";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import { DataGrid } from '@mui/x-data-grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function MediaCard() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      {animalData.map((data, key) => {
        return (
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={3} key={data.id}>
              <Card
                item
                xs={3}
                sx={{
                  maxWidth: 345,
                  boxShadow: 3,
                  marginLeft: 5,
                  marginTop: 5,
                  marginBottom: 5,
                }}
                key={data.id}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1200x628-facebook.jpg"
                  alt={data.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <FavoriteIcon></FavoriteIcon>
                  </Button>
                  <Button size="small">
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}
