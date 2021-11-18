import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DrawerData from '../components/DrawerData';
import { Link } from 'react-router-dom';
import {
  Drawer as MUIDrawer,
  Box,
  List,
  Divider,
  ListItem,
  Button,
  IconButton,
  ListItemText,
} from "@mui/material";

import { makeStyles } from "@material-ui/styles"; 

const useStyles = makeStyles((theme) => ({
  drawer: { 
    width:'220px',
    flexShrink: 0,
    margin: 'auto',
  },
  list: {
    justifyContent: 'center',
    textAlign: 'center'
  }
}));

const Drawer = ({ navOpen, navBarHandler }) => {
  const classes = useStyles();
  return (
    <div style={{ display: "flex-box" }}>
      <MUIDrawer open={navOpen} classes={{paper: classes.drawer}}>
        <List>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={navBarHandler}
          >
            <CloseIcon />
          </IconButton>
          {DrawerData.map(
              (item) => (
                <Link to={item.link} style={{textDecoration: 'none', color: 'black'}} onClick={navBarHandler}>
                  <ListItem button key={item.title}>
                    {item.icon}
                    <ListItemText>
                    {item.title}
                    </ListItemText>
                  </ListItem>
                  </Link>
              )
          )}
        </List>
      </MUIDrawer>
    </div>
  );
};

export default Drawer;
