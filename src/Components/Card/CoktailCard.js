import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CoktailCard.css";

export default function ImgMediaCard({ drinks }) {
  const { name, info, img } = drinks;
  return (
    <>
      <Card className="app__card" sx={{ maxWidth: 345 }}>
        <CardMedia
          className="drinkimg"
          component="img"
          image={img}
          alt="green iguana"
          height="140"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
        </CardContent>
        <CardActions className="Action">
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
