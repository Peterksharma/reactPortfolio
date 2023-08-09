// import zIndex from '@mui/material/styles/zIndex';
import * as React from 'react';


function Splash() {
  const bannerTxt = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
    letterSpacing: '.2em',
    zIndex: '3',
    textAlign: 'center'
  }
  return (
    <div>
      <div style={bannerTxt}>
        <p id='bannerNameFirst'>Peter</p>
        <p id='bannerNameLast'>Sharma</p>
        <p id='title'>Software Developer</p>
      </div>
    </div>
  );
}

export default Splash;

