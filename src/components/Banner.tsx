import React from 'react';
import '../styles/Banner.css';
import video from '../video/abertura.mp4';


const Banner: React.FC = () => {
  return (
    <div className='main-banner-container'>
       <video src={video} autoPlay loop muted className='banner-video'></video>
    </div>
  );
};

export default Banner;
