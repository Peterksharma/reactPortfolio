import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Navigation() {
  const location = useLocation();

  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" component={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>About Me</Button>
      <Button variant="text" component={Link} to="/Contact" className={location.pathname === '/Contact' ? 'active' : ''}>Contact</Button>
      <Button variant="text" component={Link} to="/Portfolio" className={location.pathname === '/Portfolio' ? 'active' : ''}>Portfolio</Button>
      <Button variant="text" component={Link} to="/Resume" className={location.pathname === '/Resume' ? 'active' : ''}>Resume</Button>
    </Stack>
  );
}

export default Navigation;
