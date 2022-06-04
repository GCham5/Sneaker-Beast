import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ListingDetails from './components/ListingDetails';
import Profile from './components/Profile'
import CreatePosting from './components/CreatePosting';


const theme = createTheme({
  palette: {
    background: {
      default: "#F5F1ED"
    },
    primaryButton: {
      main: "#744253",
      contrastText: '#fff',
    },
    secondaryButton: {
      main: '#0062CD',
      contrastText: '#fff',
    },
    filterButton: {
      main: '#70789C',
    },
    generic: {
      default: "#fff"
    }
  },
  typography: {
    h5: {
      fontFamily: 'Marcellus serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    h6: {
      fontFamily: 'Lucida Console, sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 500,
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    body2: {
      fontFamily: 'Courier New, monospace',
      fontWeight: 500,
    },
    button: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 500
    },
  },
  spacing: 8,
});

function App() {
  const [signedIn, setSingedIn] = useState(false);
  const [userID, setUserID] = useState(1);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <BrowserRouter>
        <Navbar signedIn={signedIn} setSingedIn={setSingedIn}/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="signin" element={<SignIn signedIn={signedIn} setSingedIn={setSingedIn} setUserID={setUserID} />} />
            <Route path="signup" element={<SignUp signedIn={signedIn} setSingedIn={setSingedIn} setUserID={setUserID} />} />
            <Route path="listing/:id" element={<ListingDetails signedIn={signedIn} userID={userID} />} />
            <Route path="profile" element={<Profile userID={userID} />} />
            <Route path="create-posting" element={<CreatePosting userID={userID} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;