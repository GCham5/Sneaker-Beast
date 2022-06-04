import "./index.css";
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListingDetailsCard from "../ListingDetailsCard";
import ListingDetailsDescription from "../ListingDetailsDescription";
import { useParams } from "react-router";

export default function ListingDetails(props) {
  const [sneaker, setSneaker] = useState({});
  const [owner, setOwner] = useState([]);
  const { id } = useParams();

  const getOwner = async (result) => {
    await fetch(`/api/users/${result.listedBy}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setOwner(result.firstName);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    fetch(`/api/sneakers/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setSneaker(result);
          console.log(result);
          getOwner(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={9} sx={{ textAlign: "left", pt: 4 }}>
          <Typography variant="h4" component="div">
            {sneaker.name}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ borderBottom: 1, mb: 2 }}
          >
            {sneaker.brand}
          </Typography>
        </Grid>
        <Divider />
        <Grid item xs={9}>
          <ListingDetailsCard sneaker={sneaker} signedIn={props.signedIn} userID={props.userID} sneakerID={id} />
        </Grid>

        <Grid item xs={9}>
          <ListingDetailsDescription sneaker={sneaker} owner={owner} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
