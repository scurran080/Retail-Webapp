import React from "react";
import { Card, Typography, CardHeader, CardContent, Grid } from "@mui/material";
import PageCard from "./PageCard";
import InventoryPageData from "../pages/inventoryPage/InventoryPageData";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "250px",
    flexShrink: 0,
    margin: "auto",
  },
}));


const ActivityCard = () => {
  const classes = useStyles();
  return (
    <div className="activity-card-wrapper">
      <div>
        <Grid container spacing={0}>
          <Grid item xs={6} md={6} lg={6}>
            <Card elevation={3} classes={{root: classes.card}}>
              <CardHeader title={"Activity"}></CardHeader>
              <CardContent>
                <Typography variant="body2">
                  This is testing the feed.
                  <br></br>
                  <a style={{ textDecoration: "none", fontWeight: "bold" }}>
                    this a test 123 123 123.
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Card elevation={3} classes={{root: classes.card}}>
              <CardHeader title={"Updates"}></CardHeader>
              <CardContent>
                <Typography variant="body2">
                  This is testing the feed.
                  <br></br>
                  <a style={{ textDecoration: "none", fontWeight: "bold" }}>
                    this a test 123 123 123.
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ActivityCard;
