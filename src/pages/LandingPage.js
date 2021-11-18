import React from "react";
import { Card, Grid, Box, Typography, Container } from "@mui/material";
import LandingCard from "../components/LandingCard";
import LandingPageData from "../pages/LandingPageData";
import ActivityCard from '../components/ActivityCard';

/**
 * See if it is possible to make card elements clickable
 * if not, add buttons to each of the cards or find some work around.
 * Also for more consise design rework the hamburger menu selection options.
 */

const LandingPage = () => {
  return (
    <div>
      <Box m={5}>
        <Container>
          <Grid container spacing={4}>
            {LandingPageData.map((data) => (
              <Grid item key={data.id} xs={12} md={6} lg={4}>
                <LandingCard data={data}/>
              </Grid>
            ))}
          </Grid>
          <Grid pt={3}>
            <ActivityCard />
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default LandingPage;
