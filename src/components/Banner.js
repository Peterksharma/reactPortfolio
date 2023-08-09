import * as React from 'react';
import bannerVideo from '../assets/video/banner_video.mp4'

function Banner() {
  const bannerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
  }

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    zIndex: '1'
  }

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))',
    zIndex: '2'
  }

  return (
    <div style={bannerStyle}>
      <div className="video-banner">
        <video autoPlay loop muted style={videoStyle}>
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div style={overlayStyle}></div>
      </div>
    </div>
  );
}

export default Banner;
