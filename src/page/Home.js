import React, { Component, Fragment,useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Modal from '../components/Modal'
import SplashScreen from '../components/SplashScreen';


function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Simulasikan proses inisialisasi
    setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Misalnya, hilangkan splash screen setelah 3 detik
  }, []);

  return (
    <>
      <div className="home">
        {showSplash ? <SplashScreen /> : (
          <div>
            <Hero />
          </div>
        )} </div>
    </>
  );
}

export default Home;

