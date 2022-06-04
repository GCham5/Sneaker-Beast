import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@emotion/react";
import Card from "../Card";

export default function CustomerListings(props) {
  const [sneakers, setSneakers] = useState([]);
  console.log(props)
  useEffect(() => {
    fetch(`/api/user-listings/${props.userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }})
      .then((res) => res.json())
      .then(
        (result) => {
          setSneakers(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [props.userID]);

  const theme = useTheme();
  return (
    <React.Fragment>
      <Grid item xs={12} md={12}>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ paddingTop: theme.spacing(2) }}
        >
          Your Listings
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid container item xs={8} spacing={4}>
        {sneakers.map((sneakerInfo, i) => {
          return (
            <Grid item key={i}>
              <Card sneakerInfo={sneakerInfo} hideButton={true}/>
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={2}></Grid>
    </React.Fragment>
  );
}
