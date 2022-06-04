import React, { useState, useEffect } from "react";
import Card from "../Card";
import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useTheme } from "@emotion/react";
import Gallery from "../Gallery";
import Filter from "../Filter";

export default function LandingPage() {
  const [sneakers, setSneakers] = useState([]);
  const [sneakersFiltered, setSneakersFiltered] = useState([]);
  const [sneakersPerPage, setSneakersPerPage] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    fetch("/api/sneakers", { method: "GET" })
      .then((res) => res.json())
      .then(
        (result) => {
          setSneakers(result);
          setSneakersPerPage(Math.round(result.length / 10));
          let startIndex = 1;
          let endIndex = 1 * Math.round(result.length / 10);
          setSneakersFiltered(result.slice(startIndex, endIndex));
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);


  const changePage = (event, pageNumber) => {
    let endIndex = pageNumber * sneakersPerPage;
    let startIndex = endIndex - sneakersPerPage;
    setSneakersFiltered(sneakers.slice(startIndex, endIndex));

  };

  const changeOptions = (options) => {
    let filteredSneakers = sneakers;
    if (options.brand) {
      filteredSneakers = filteredSneakers.filter(
        (sneaker) => sneaker.brand === options.brand
      )
    }

    if (options.size) {
      filteredSneakers = filteredSneakers.filter(
        (sneaker) => sneaker.size === options.size
      )
    }

    if (options.rate) {
      if (options.rate === 1) {
      
        filteredSneakers = filteredSneakers.filter(
          (sneaker) => sneaker.rate <= 19
        )
      }else if (options.rate === 2) {
        filteredSneakers = filteredSneakers.filter(
          (sneaker) => sneaker.rate >= 20 && sneaker.rate <= 39
        )
      }else{
        filteredSneakers = filteredSneakers.filter(
          (sneaker) => sneaker.rate >= 40 
        )
      }
    }

    setSneakersFiltered(filteredSneakers)
    setSneakersPerPage(0)
  }

  return (
    <React.Fragment>
      <Grid container direction="row" sx={{ paddingBottom: theme.spacing(5) }}>
        <Grid sx={{ pb: 10 }}>
          <Gallery />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Filter changeOptions={changeOptions} />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid
          item
          container
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 3, pb: 12, px: 2 }}
        >
          {sneakersFiltered.map((sneakerInfo, i) => {
            return (
              <Grid item key={i}>
                <Card sneakerInfo={sneakerInfo} />
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <Pagination
              count={sneakersPerPage + 1}
              onChange={changePage}
              size="large"
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
