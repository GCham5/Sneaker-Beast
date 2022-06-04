import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function MediaCard(props) {

  const [name, setName] = useState([]);

  const navigate = useNavigate();
  
  const viewListingDetails = e => {
    e.preventDefault();
    navigate(`/listing/${props.sneakerInfo.id}`);
  }

  useEffect(() => {
    fetch(`/api/users/${props.sneakerInfo.listedBy}`, { 
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      } })
      .then((res) => res.json())
      .then(
        (result) => {
          setName(result.firstName) 
        }
      );
  }, [props.sneakerInfo.listedBy]);

  return (
    <Card>
      <Grid container sx={{ width: 600, height: 270 }}>
        <Grid container item sm={12} md={7} alignItems="center">
          <CardMedia
            component="img"
            image={props.sneakerInfo.imageURL}
            alt="sneaker"
          />
        </Grid>
        <Grid container item sm={12} md={5} alignContent="stretch" justifyContent="center" alignItems="center" sx={{ borderLeft: "2px solid #e6c0a6"}}>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {props.sneakerInfo.name}
            </Typography>
            <Grid container item direction="column" justifyContent="space-around" sx={{ height: 100 }} >
              <Grid item>
                <Typography variant="body1">
                  Size: {props.sneakerInfo.size}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Seller: {name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Location: {props.sneakerInfo.location}
                </Typography>
              </Grid>
            </Grid>

          </CardContent>
          <CardActions sx={{ width:172, justifyContent:"space-around" }}>
            <Typography>
              ${props.sneakerInfo.rate}
            </Typography>
            {!props.hideButton &&
                <Button onClick={viewListingDetails} color="primaryButton" variant="contained">View</Button>
            }
          </CardActions>
        </Grid>

      </Grid>

    </Card>
  );
}