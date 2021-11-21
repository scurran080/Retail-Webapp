import React from "react";
import {
  Card,
  Typography,
  CardHeader,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  dropSelection: {
    width: "230px",
    marginTop: "25px",
  },
  viewCard: {
      height: '45vh',
      width: '90vw',
      marginTop: '15px'
  },
}));

const UpdatePage = () => {
  const classes = useStyles();
  return (
    <div>
      <FormControl fullWidth classes={{ root: classes.dropSelection }}>
        <InputLabel>Location</InputLabel>
        <Select label="Location">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Card classes={{root: classes.viewCard}}>
        <Grid>
            <Grid item>
                test
            </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default UpdatePage;
