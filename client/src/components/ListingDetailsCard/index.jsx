import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

function SuccessDialog (props) {
    return (
      <div>
        <Dialog
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Sucess!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You have successfully rented the {props.sneakerName}!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

export default function ListingDetailsCard(props) {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => {
      setOpen(false);
      navigate("/");
    };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.signedIn) {
      rentSneaker();
      setOpen(true);
    } else {
      navigate("/signin");
    }
  };

  const rentSneaker = () => {
    fetch("/api/rent-sneaker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sneakerID: props.sneakerID,
        userID: props.userID,
      }),
    });
  };

  return (
    <Card>
      <Grid container>
        <Grid container item sm={12} md={7} alignItems="center">
          <CardMedia
            component="img"
            image={props.sneaker.imageURL}
            alt="sneaker"
          />
        </Grid>
        <Grid
          container
          direction="row"
          item
          sm={12}
          md={5}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container item justifyContent="center">
            {/* <CardContent sx={{ border: 0.1, width: .85 }} > */}
            <Grid
              container
              justifyContent="space-around"
              alignItems="center"
              sx={{ border: 0.1, width: 0.7, p: 3 }}
            >
              <Grid item xs={3}>
                <Typography variant="h6">Year:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">
                  {props?.sneaker?.releaseDate?.split("-")[0]}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6">Size:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">{props.sneaker.size}</Typography>
              </Grid>
            </Grid>
            {/* </CardContent> */}
          </Grid>

          <CardActions>
            <Button
              onClick={handleSubmit}
              color="primaryButton"
              variant="contained"
              sx={{ width: 200, height: 50, borderRadius: 3, fontSize: 20 }}
            >
              Rent Now
            </Button>
          </CardActions>
        </Grid>
        <SuccessDialog handleClose={handleClose} open={open} setOpen={setOpen} sneakerName={props.sneaker.name}/>
      </Grid>
    </Card>
  );
}
