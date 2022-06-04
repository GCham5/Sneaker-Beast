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
import Link from "@mui/material/Link";
import MessageDialog from "../MessageDialog";
import "./index.css";

export default function SignInUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userAccountJSON = await checkUserAccount();
    if (userAccountJSON.length > 0) {
      props.setUserID(userAccountJSON[0].id);
      props.setSingedIn(true);
      navigate("/");
    } else {
      setOpen(true);
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const checkUserAccount = async () => {
    return fetch("/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
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
                Login
              </Typography>
              <Container sx={{ paddingTop: theme.spacing(4) }}>
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
                  Login
                </Button>
              </div>
              <Link
                onClick={handleCreateAccount}
                href="/signup"
                sx={{ paddingTop: theme.spacing(2) }}
                underline="none"
              >
                Create Account
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} md={3}>
          <MessageDialog
            handleClose={handleClose}
            open={open}
            setOpen={setOpen}
            headerMessage={"Account Not Found!"}
            message={"Make sure the information entered is correct."}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
