import * as React from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import * as Nav from './components';
import BikeOrderContext from '../../contexts/bike-order-context';

const drawerWidth = 240;

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Dviračiai', to: '/rental-bikes' },
  { text: 'Kontaktai', to: '/contacts' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const { orderItems } = React.useContext(BikeOrderContext);

  const orderItemsCount = orderItems.length;
  const isHomePage = window.location.pathname === '/';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <DirectionsBikeIcon />
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => navigate(`${item.to}`)} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="užsakymas" disablePadding>
          <ListItemButton onClick={() => navigate('/order')} sx={{ textAlign: 'center' }}>
            <ListItemText>
              Užsakymas (
              {orderItemsCount}
              )
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', mb: 8 }}>
      <AppBar
        component="nav"
        position="fixed"
        elevation={isHomePage ? 0 : 3}
        sx={{ mb: 3, background: `${isHomePage ? 'transparent' : ''}` }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'common.white' }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'common.white' }}
          >
            <DirectionsBikeIcon />
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignSelf: 'stretch' }}>
            {pages.map(({ text, to }) => (
              <Nav.Link key={to} to={to}>{text}</Nav.Link>
            ))}
            <Nav.Link key="užsakymas" to="/order">
              Užsakymas
              (
              {orderItemsCount}
              )
            </Nav.Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
};

export default Navbar;
