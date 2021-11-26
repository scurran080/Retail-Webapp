import React from "react";
import { useState } from "react";
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
  Grid,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  dropSelection: {
    width: "230px",
    marginTop: "25px",
  },
  viewCard: {
    height: "45vh",
    width: "90vw",
    marginTop: "15px",
  },
  button: {
    marginTop: "30px",
    marginLeft: "10px",
  },
}));

const UpdatePage = () => {
  const classes = useStyles();
  const [location, setLocation] = useState("all");
  const handleSelection = (event) => {
    setLocation(event.currentTarget.dataset);
  };
  const [shownItems, setShownItems] = useState([]);
  const getData = async () => {
    console.log("calling api");
    if (location == "all") {
      const response = await fetch("http://localhost:5050/itemQuery/allItems", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      //looping through and parsing the returned data.
      //this was a pain in the ass and there probably is as easy way to do this.
      const returnedJson = await response.json();
      for(var i = 0; i < returnedJson.rows.length; i++){
        for(var key in returnedJson.rows[i]){
          console.log(returnedJson.rows[i][key])
        }
      }
    }
  };

  return (
    <div>
      <FormControl fullWidth classes={{ root: classes.dropSelection }}>
        <InputLabel>Location</InputLabel>
        <Select label="Location">
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button
        size="large"
        variant="contained"
        classes={{ root: classes.button }}
        onClick={getData}
      >
        Select
      </Button>
      <Card classes={{ root: classes.viewCard }}>
        <Grid>{shownItems}</Grid>
      </Card>
    </div>
  );
};

export default UpdatePage;
