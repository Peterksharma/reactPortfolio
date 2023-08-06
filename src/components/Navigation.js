import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Navigation() {
  const location = useLocation();

  return (
    <Stack spacing={4} direction="row">
      <Button variant="text" component={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>About Me</Button>
      <Button variant="text" component={Link} to="/Portfolio" className={location.pathname === '/Portfolio' ? 'active' : ''}>Portfolio</Button>
      <Button variant="text">
            <a href="https://docs.google.com/document/d/1NzuXVp1UKaG7RpKSKHFncjv__sD6d5fI3KOY_9NzZ6k/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </Button>
    </Stack>
  );
}

export default Navigation;
