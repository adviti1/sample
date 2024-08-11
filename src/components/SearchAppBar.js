import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.7),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({ aboutRef }) {
  const [state, setState] = React.useState({
    top: false,
  });

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="-webkit-sticky" sx={{ backgroundColor: 'transparent', opacity: '1', top: '0', boxShadow: 'none' }}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            onClick={() => scrollToSection(aboutRef)}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: 'Playfair Display, sans-serif', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}
          >
            Adviti Gangwar
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: 'white' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'white' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
      >
      </Drawer>
    </Box>
  );
}
  
