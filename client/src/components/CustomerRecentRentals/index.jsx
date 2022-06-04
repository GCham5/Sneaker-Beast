import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@emotion/react';
import Card from "../Card";

export default function CustomerRecentRentals(props) {
    const [sneakers, setSneakers] = useState([]);
    const theme = useTheme();

    useEffect(() => {
      fetch(`/api/user-rentals/${props.userID}`, {
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

    return (
        <React.Fragment>
            <Grid item xs={12} md={12}>
                <div style={{ borderBottom: "1px solid", paddingTop: theme.spacing(10) }}></div>
                <Typography gutterBottom variant="h3" component="div" sx={{ paddingTop: theme.spacing(2) }}>Recent Rentals</Typography>
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
            <Grid item xs={2} ></Grid>
        </React.Fragment>
    );
}