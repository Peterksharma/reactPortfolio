import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avatarImage from '../assets/images/IMG_0960.jpg';

function AboutMe() {
  return (
  <Stack direction="row" spacing={2}>
  <Avatar alt="Peter Sharma" src={avatarImage} />
</Stack>
  )
}

export default AboutMe;
