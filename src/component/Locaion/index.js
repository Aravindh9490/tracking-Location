import React, { useState, useEffect } from "react";

const App = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Check if the browser supports the Geolocation API
    if ("geolocation" in navigator) {
      // Get the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        },
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default App;
