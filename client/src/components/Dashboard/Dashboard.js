// https://mui.com/material-ui/getting-started/templates/
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  styled,
  createTheme,
  ThemeProvider,
  useTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MainListItems from './listItems';
import {
  Avatar,
  Container,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/userSlice';

const drawerWidth = 270;
const settings = ['Profile', 'Account', 'Dashboard'];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  background: '#f3f3f3',
  zIndex: 10,
  color: 'black',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Dashboard = () => {
  const user = useSelector((state) => state.userLog.user);
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isXs = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(false);
  const [header, setHeader] = React.useState('Dashboard');
  const [openMobile, setOpenMobile] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(userActions.logout());
    let token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      handleCloseNavMenu();
      navigate('/');
    }
  };

  useEffect(() => {
    if (!isXs) {
      // large screen
      setOpen(false);
      setOpenMobile(false);
    } else {
      // small screen
      setOpen(false);
    }
  }, [isXs]);


  const userNavigation = () => (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Open settings'>
        {user && (
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ p: 0, background: 'red' }}
          >
            <Avatar alt={user?.firstName} src='/static/images/avatar/2.jpg' />
          </IconButton>
        )}
      </Tooltip>
      {user && (
        <Menu
          sx={{ mt: '45px' }}
          id='menu-appbar'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign='center'>{setting}</Typography>
            </MenuItem>
          ))}
          <MenuItem onClick={handleLogout}>
            <Typography textAlign='center'>Logout</Typography>
          </MenuItem>
        </Menu>
      )}
    </Box>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', position: 'relative' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={() => setOpenMobile(!openMobile)}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1, ml: { xs: 0, sm: open ? 0 : 7 } }}
            >
              {header}
            </Typography>
            
            {userNavigation()}
          </Toolbar>
        </AppBar>

        {/* Mobile */}
        <Drawer
          variant='permanent'
          open={openMobile}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={() => setOpenMobile(!openMobile)}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List
            component='nav'
            sx={{
              flexGrow: 1,
            }}
          >
            {/* {mainListItems} */}
            <MainListItems header={header} setHeader={setHeader} />
            {/* <Divider sx={{ my: 1 }} /> */}
            {/* {secondaryListItems} */}
          </List>
        </Drawer>

        {/* Potrait, large screens */}
        <Drawer
          variant='permanent'
          open={open}
          sx={{
            display: { xs: 'none', sm: 'block' },
            overflow: 'hidden',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List
            component='nav'
            sx={{
              flexGrow: 1,
              overflow: 'hidden',
            }}
          >
            {/* {mainListItems} */}
            <MainListItems header={header} setHeader={setHeader} />
            {/* <Divider sx={{ my: 1 }} /> */}
            {/* {secondaryListItems} */}
          </List>
        </Drawer>

        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
            height: { xs: 'initial', md: `calc(100vh - 100px)` },
          }}
        >
          <Toolbar />
          <CssBaseline />
          <Container sx={{ my: 3 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
