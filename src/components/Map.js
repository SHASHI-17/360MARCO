// Map.jsx

import React from 'react';
import './Map.css';

const Map = () => {
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.941392188272!2d-80.19789462471458!3d26.65035887680446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d92f56dd04773f%3A0x57ccac72d2dafa42!2s9314%20Forest%20Hill%20Blvd%2C%20Wellington%2C%20FL%2033411%2C%20USA!5e0!3m2!1sen!2sin!4v1706619101760!5m2!1sen!2sin';

  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src={mapSrc}
        className="map-iframe"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
