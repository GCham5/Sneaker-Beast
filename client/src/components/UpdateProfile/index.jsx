import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useTheme } from '@emotion/react';
import { useNavigate } from "react-router-dom";

export default function UpdateProfile(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const theme = useTheme();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Grid item xs={1} md={4}></Grid>
      <Grid item xs={10} md={4}>
        <Card raised sx={{ borderRadius: theme.spacing(2) }}>
          <CardContent className="sign-in-form">
            <Typography gutterBottom variant="h4" component="div" sx={{ paddingBottom: theme.spacing(2), borderBottom: "2px solid #744253" }}>
              Update Profile
            </Typography>
            <Container sx={{ paddingTop: theme.spacing(4) }}>
              <TextField
                sx={{ paddingBottom: theme.spacing(4) }}
                className="input-field"
                fullWidth
                label="Enter Username"
                required
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
              <TextField
                sx={{ paddingBottom: theme.spacing(4) }}
                className="input-field"
                fullWidth
                label="Old Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <TextField
                sx={{ paddingBottom: theme.spacing(4) }}
                className="input-field"
                fullWidth
                label="New Password"
                required
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />

            </Container>

            <div>
              <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1} md={4}></Grid>
    </React.Fragment>
  );
}