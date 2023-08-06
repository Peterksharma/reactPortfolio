import * as React from 'react';
import Button from '@mui/material/Button';
import bannerVideo from '../assets/video/banner_video.mp4'

function Banner() {
  return (
    <div>
      <div className="video-banner">
        <video autoPlay loop muted className="video">
          <source src={bannerVideo} type="video/mp4" />
        </video>
      </div>
      <div className='bannerTxt'>
        <p id='bannerName'>Peter Sharma</p>
        <p id='title'>Software Developer</p>
        <Button id='portfolio' variant="contained">Projects</Button>
        </div>
    </div>
  );
}

export default Banner;
