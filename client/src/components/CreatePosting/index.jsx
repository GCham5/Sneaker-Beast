import React, { useState } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import MessageDialog from '../MessageDialog';
import "./index.css";

export default function CreatePosting(props) {
  const [sneakerName, setSneakerName] = useState("");
  const [brand, setBrand] = useState("");
  const [colorway, setColorway] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [size, setSize] = useState("");
  const [location, setLocation] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState();
  const [image, setImage] = useState("");
  const [sneakerOptions, setSneakerOptions] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewSneakerPosting();
    setOpen(true);
  };

  const getNewOptions = async (newValue) => {
    await fetch("/api/search-sneakers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sneakerName: newValue }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setSneakerOptions(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const createNewSneakerPosting = () => {
    fetch("/api/create-posting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: sneakerName,
        brand: brand,
        colorway: colorway,
        location: location,
        releaseDate: releaseDate,
        size: size,
        rate: rate,
        description: description,
        listedBy: props.userID,
        rentedBy: null,
        imageURL: image,
      }),
    });
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ paddingTop: theme.spacing(2) }}>
        <Grid item xs={1} md={3}></Grid>
        <Grid item xs={10} md={6}>
          <Card raised sx={{ borderRadius: theme.spacing(2) }}>
            <CardContent className="sign-in-form">
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{
                  paddingBottom: theme.spacing(2),
                  borderBottom: "2px solid #744253",
                }}
              >
                Add a New Sneaker
              </Typography>
              <Container sx={{ paddingTop: theme.spacing(4) }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  className="input-field"
                  options={sneakerOptions}
                  onChange={(event, value) => {
                    setBrand(value.brandName);
                    setColorway(value.colorway);
                    setSneakerName(value.label);
                    setImage(value.imageURL);
                  }}
                  onInputChange={(event, newValue) => {
                    getNewOptions(newValue);
                  }}
                  isOptionEqualToValue={(option, value) =>
                    option.sneakerName === value.sneakerName
                  }
                  required
                  sx={{ width: 300, paddingBottom: theme.spacing(4) }}
                  renderInput={(params) => (
                    <TextField {...params} label="Sneaker Name" />
                  )}
                />

                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  className="input-field"
                  label="Brand"
                  disabled
                  fullWidth
                  id="outlined-disabled"
                  value={brand}
                />

                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  className="input-field"
                  label="Colorway"
                  disabled
                  fullWidth
                  id="outlined-disabled"
                  value={colorway}
                />

                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  id="outlined-required"
                  label="Release Date"
                  className="input-field"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  required
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                />

                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  className="input-field"
                  fullWidth
                  label="Location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />

                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  className="input-field"
                  fullWidth
                  label="Size"
                  type="number"
                  required
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />

                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  className="input-field"
                  fullWidth
                  label="Rate"
                  type="number"
                  required
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />

                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  className="input-field"
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {image.length > 0 && (
                  <Container sx={{ paddingBottom: theme.spacing(2) }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        paddingBottom: theme.spacing(2),
                        margin: "auto",
                        width: "80%",
                      }}
                    >
                      Image
                    </Typography>
                    <Container sx={{ border: "2px solid #744253" }}>
                      <CardMedia
                        component="img"
                        image={image}
                        alt="sneaker"
                      ></CardMedia>
                      <Typography variant="p1" component="div">
                        {sneakerName}
                      </Typography>
                    </Container>
                  </Container>
                )}
              </Container>

              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primaryButton"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} md={3}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <MessageDialog 
        handleClose={handleClose} 
        open={open} 
        setOpen={setOpen}
        headerMessage = {'Success!'}
        message={'Your sneaker has been posted to the market!'}
      />
    </React.Fragment>
  );
}
