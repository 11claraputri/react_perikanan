
import React from 'react';
import './SplashScreen.css';

function SplashScreen() {
  const blueBackgroundColor = "#00479c";
  const montserratFont = "Montserrat, sans-serif";
  const titleStyle = {
    fontFamily: montserratFont,
    textAlign: 'center',
    color: 'white',
  };

  return (
    <div className="splash-screen">
      <div style={{ backgroundColor: blueBackgroundColor }} className='w-full h-screen flex flex-col justify-center items-center '>
        <h1 style={titleStyle} className='text-center text-white text-2xl font-bold'>SiPasti</h1>
        <h1 style={titleStyle} className='text-center text-white text-sm font-bold'>Sistem Informasi Pelayanan Satu Pintu Terintegrasi</h1>
        <h1 style={titleStyle} className='text-center text-white text-sm font-bold'>Web Enhanced</h1>
      </div>
    </div>
  );
}

export default SplashScreen;