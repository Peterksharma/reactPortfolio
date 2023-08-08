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
    textShadow: '-2px 4px 10px rgb(0, 0, 0)',
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

