import React, { useEffect } from 'react';
import './Location.css'

const Location = () => {
  
  return (
    <>
      <div className='map-page' >
        <div className='map-box' >
          <div className="map-canvas">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.532519570806!2d77.1665201785801!3d32.23947037910967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1687873134159!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                // allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
              >
            </iframe>
          </div>
          <div id="map" className="map-inner gradient-lateral">
            <div className="overflow">
              <h1>Manali, India</h1>
              <p>
                Manali is a beautiful hill station located in the Indian state of Himachal Pradesh. It is situated at an altitude of 2,050 meters (6,726 ft) in the Beas River Valley. Manali is known for its breathtaking natural beauty, snow-capped mountains, lush greenery, and adventure activities like trekking, skiing, and paragliding.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='map-body' >
        <div id="container">
          <div id="map-canvas">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.532519570806!2d77.1665201785801!3d32.23947037910967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1687873134159!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              // allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
          <div id="map-inner" className="gradient-lateral">
            <div className="overflow">
              <h1>Manali, India</h1>
              <p>
                Manali is a beautiful hill station located in the Indian state of Himachal Pradesh. It is situated at an altitude of 2,050 meters (6,726 ft) in the Beas River Valley. Manali is known for its breathtaking natural beauty, snow-capped mountains, lush greenery, and adventure activities like trekking, skiing, and paragliding.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        {/* <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.532519570806!2d77.1665201785801!3d32.23947037910967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1687873134159!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          allowfullscreen="" 
          loading="lazy" 
          // referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe> */}
      </div>
    </>
  );
};

export default Location;