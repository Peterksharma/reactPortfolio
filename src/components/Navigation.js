import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Navigation() {
  const location = useLocation();

  const navZ = {
    zIndex: '21',
    position: 'absolute',
    top: '-8.5vh',
    left: '-5vw',
    marginRight: '-4%' 

  }

  const btnStyle = {
    color: '#1282A2',
    width: '100px',
    fontSize: '95%',
    fontWeight: '550',
    textShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
  }

  const btnHoverStyle = {
    '&:hover': {
      color: '#C5E0D8'
    }
  }

  return (
    <Stack spacing={2} direction="row" style={navZ}>
      <Button variant="text" sx={{ ...btnHoverStyle, ...btnStyle }} component={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Button>
      <Button variant="text" sx={{ ...btnHoverStyle, ...btnStyle }} component={Link} to="/project" className={location.pathname === '/project' ? 'active' : ''}>Projects</Button>
      <Button variant="text" sx={{ ...btnHoverStyle, ...btnStyle }} component={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Me</Button>
      <Button
        variant="text"
        sx={{ ...btnHoverStyle, ...btnStyle }}
        component="a"
        href="https://docs.google.com/document/d/1NzuXVp1UKaG7RpKSKHFncjv__sD6d5fI3KOY_9NzZ6k/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Button>

    </Stack>
  );
}

export default Navigation;
