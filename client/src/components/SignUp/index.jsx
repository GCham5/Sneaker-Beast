import React, { useState } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import MessageDialog from "../MessageDialog";
import "./index.css";

export default function SignInUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
    props.setSingedIn(true);
    setOpen(true);
  };

  const createUser = () => {
    fetch("/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          props.setUserID(result.id);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ paddingTop: theme.spacing(20) }}>
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
                Sign Up
              </Typography>
              <Container sx={{ paddingTop: theme.spacing(4) }}>
                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  className="input-field"
                  fullWidth
                  label="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  className="input-field"
                  fullWidth
                  label="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  className="input-field"
                  fullWidth
                  label="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  sx={{ paddingBottom: theme.spacing(4) }}
                  className="input-field"
                  fullWidth
                  label="Password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Container>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Sign Up
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} md={3}></Grid>
        <MessageDialog
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
          headerMessage={"Success!"}
          message={"You have successfully created an account!"}
        />
      </Grid>
    </React.Fragment>
  );
}
