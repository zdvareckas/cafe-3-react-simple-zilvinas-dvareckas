import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { useNavigate } from 'react-router-dom';
import * as Nav from './components';
import RentalBikesContext from '../../contexts/rental-bikes-context';

const drawerWidth = 240;

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Dviračiai', to: '/rental-bikes' },
  { text: 'Kontaktai', to: '/contacts' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const rentalBikeContext = React.useContext(RentalBikesContext);

  let navBg = '';
  if (window.location.pathname === '/') {
    navBg += 'transparent';
  }

  console.log('Navbar, rentalBikeContextValue', rentalBikeContext);

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
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', mb: 8 }}>
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={{ mb: 3, background: `${navBg}` }}
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
