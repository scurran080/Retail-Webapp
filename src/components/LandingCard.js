import React from "react";
import {
  Card,
  Typography,
  CardHeader,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from 'react-router-dom';

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "175px",
    flexShrink: 0,
    margin: "auto",
  },
  button: {
    marginTop: '20px',
    height: "50px",
    width: '100px',
    marginBottom: '20px',

  },
  text: {
      paddingTop: '25px',
    marginTop: '25px',
  }
}));

const LandingCard = ({ data }) => {
  const classes = useStyles();
  return (
    <div>
      <Card elevation={3} classes={{ root: classes.card }}>
        <CardContent>
          <Button size="large" variant="contained" classes={{root: classes.button}} component={Link} to={data.link}>
            {data.header}
          </Button>
          <Typography variant="body2" classes={{paper: classes.text}} variant="h6">
            {data.body}
            <br></br>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingCard;
