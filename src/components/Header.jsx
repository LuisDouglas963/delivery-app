import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

export const Header = () => {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <DeliveryDiningIcon
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </DeliveryDiningIcon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Delivery
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
            >
              {/* <AccountCircle /> */}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
