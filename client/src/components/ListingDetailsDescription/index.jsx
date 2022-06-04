import React, { useState, useEffect } from "react";
import './index.css'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function ListingDetailsDescription(props) {

    // useEffect(() => {
    //     fetch(`/api/users/${props.sneaker.listedBy}`, { 
    //       method: "GET",
    //       headers: {
    //         'Content-Type': 'application/json',
    //       }})
    //       .then((res) => res.json())
    //       .then(
    //         (result) => {
    //             console.log("test")
    //         setOwner(result.firstName) 
    //         },
    //         (error) => {
    //           console.log(error);
    //         }
    //       );
    //   }, []);


    return (

        <Grid sx={{pb: 10}}>
            <Grid id="container">
                <Grid id="header">
                    <Typography variant="h4">
                        Sneaker Details
                    </Typography>
                </Grid>

                <Grid id="infoContainer" container rowSpacing={2}>
                    <Grid container item className="trait">
                        <Typography variant="h5">
                            Description
                        </Typography>
                        <Typography variant="body1">
                            {props.sneaker.description}
                        </Typography>
                    </Grid>
                    <Grid container item className="trait">
                        <Typography variant="h5">
                           Colorway
                        </Typography>
                        <Typography variant="body1">
                            {props.sneaker.colorway}
                        </Typography>
                    </Grid>
                    <Grid container item className="trait">
                        <Typography variant="h5">
                            Release Date
                        </Typography>
                        <Typography variant="body1">
                            {props?.sneaker?.releaseDate?.split("T")[0]}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid id="container">
                <Grid id="header">
                    <Typography variant="h4">
                        Cost Details
                    </Typography>
                </Grid>

                <Grid id="infoContainer" container rowSpacing={2}>
                    <Grid container item className="trait">
                        <Typography variant="h5">
                            Rate
                        </Typography>
                        <Typography variant="body1">
                            {props.sneaker.rate}$
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid id="container">
                <Grid id="header">
                    <Typography variant="h4">
                        Seller Information
                    </Typography>
                </Grid>

                <Grid id="infoContainer" container rowSpacing={2}>
                    <Grid container item className="trait">
                        <Typography variant="h5">
                            Name
                        </Typography>
                        <Typography variant="body1">
                            {props.owner}
                        </Typography>
                    </Grid>
                    <Grid container item className="trait">
                        <Typography variant="h5">
                            Location
                        </Typography>
                        <Typography variant="body1">
                            {props.sneaker.location}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}