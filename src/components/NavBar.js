//import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ navBarHandler }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={navBarHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            color="common.red"
          >
            Retail Manager
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
