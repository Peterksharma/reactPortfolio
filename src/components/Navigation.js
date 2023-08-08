import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Navigation() {
  const location = useLocation();
  const resumeLink = {
    textDecoration: 'none',
    color: '#1282A2'
  }

  const navZ = {
    zIndex: '21',
    position: 'absolute',
    top: '-8.5vh',
    left: '-3vw'
  }

  const btnStyle = {
    color: '#1282A2',
    width: '100px',
    fontSize: '15px',
    fontWeight: '550'
  }

  return (
    <Stack spacing={2} direction="row" style={navZ}>
      <Button variant="text" style={btnStyle}component={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Button>
      <Button variant="text" style={btnStyle}component={Link} to="/project" className={location.pathname === '/project' ? 'active' : ''}>Projects</Button>
      <Button variant="text" style={btnStyle}component={Link} to="/aboutMe" className={location.pathname === '/about' ? 'active' : ''}>About Me</Button>
      <Button variant="text" style={btnStyle}>
            <a href="https://docs.google.com/document/d/1NzuXVp1UKaG7RpKSKHFncjv__sD6d5fI3KOY_9NzZ6k/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={resumeLink}>Resume</a>
        </Button>
    </Stack>
  );
}

export default Navigation;
