import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { useTheme } from '@emotion/react';
import './index.css'


export default function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();
  const theme = useTheme();

  const handleCreatePostingClick = (e) => {
    if (!props.signedIn) {
      e.preventDefault();
      navigate("/signin");
    } else {
      e.preventDefault();
      navigate("/create-posting");
    }

  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSneakersClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = e => {
    if (!props.signedIn) {
      e.preventDefault();
      navigate("/signin");
    } else {
      e.preventDefault();
      navigate("/profile");
    }
  }

  const handleLogInClick = e => {
    e.preventDefault();
    navigate("/signin");
  }

  const handleLogOutClick = e => {
    e.preventDefault();
    props.setSingedIn(false);
    navigate("/");

  }

  const handleCreateAccount = e => {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='generic' className="appbar-style">
        <Toolbar>
          <MenuItem className="link" onClick={handleSneakersClick}>Sneakers</MenuItem>
          {props.signedIn &&
            <MenuItem className="link" onClick={handleCreatePostingClick}>Create Posting</MenuItem>
          }
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sneaker Beast
          </Typography>
          <div>
            <Grid container spacing={1}>
              <Grid sx={{ paddingTop: theme.spacing(1), paddingRight: theme.spacing(30) }}>
              </Grid>
              <Grid>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                  sx={{ paddingTop: theme.spacing(2) }}
                >
                  <AccountCircle />
                </IconButton>
              </Grid>
            </Grid>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              {!props.signedIn &&
                <div>
                  <MenuItem onClick={handleLogInClick}>Log In</MenuItem>
                  <MenuItem onClick={handleCreateAccount}>Create Account</MenuItem>
                </div>
              }
              {props.signedIn &&
                <div>
                  <MenuItem onClick={handleLogOutClick}>Log Out</MenuItem>
                </div>
              }

            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}