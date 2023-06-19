// import React, { useEffect } from 'react';

// const Location = () => {
//   useEffect(() => {
//     const initializeMap = () => {
//       const myLatlng = new window.google.maps.LatLng(32.2396, 77.1887);

//       const mapOptions = {
//         zoom: 10,
//         zoomControl: true,
//         zoomControlOptions: {
//           style: window.google.maps.ZoomControlStyle.SMALL
//         },
//         center: myLatlng,
//         mapTypeId: window.google.maps.MapTypeId.ROADMAP,
//         mapTypeControl: false,
//         styles: [
//           {
//             "stylers": [
//               { "saturation": -100 }
//             ]
//           },
//           {
//             "elementType": "labels.icon",
//             "stylers": [
//               { "visibility": "off" }
//             ]
//           }
//         ]
//       };

//       const map = new window.google.maps.Map(document.getElementById("map-canvas"), mapOptions);

//       const marker = new window.google.maps.Marker({
//         position: new window.google.maps.LatLng(32.2396, 77.1887),
//         animation: window.google.maps.Animation.DROP,
//         map: map
//       });
//     };

//     const loadGoogleMapsAPI = () => {
//       const script = document.createElement("script");
//       script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC3RxqDNHkn1phr1GBvU9kD5NGUznVkbtU&callback=initializeMap";
//       script.async = true;
//       script.defer = true;
//       script.addEventListener("load", initializeMap);
//       document.body.appendChild(script);
//     };

//     const mapContainer = document.getElementById('map-inner');
//     if (mapContainer) {
//       loadGoogleMapsAPI();
//     }
//   }, []);

//   return (
//     <div id="container">
//       <div id="map-canvas"></div>
//       <div id="map-inner" className="gradient-lateral">
//         <div className="overflow">
//           <h1>Manali, India</h1>
//           <p>
//             Manali is a beautiful hill station located in the Indian state of Himachal Pradesh. It is situated at an altitude of 2,050 meters (6,726 ft) in the Beas River Valley. Manali is known for its breathtaking natural beauty, snow-capped mountains, lush greenery, and adventure activities like trekking, skiing, and paragliding.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;


// import React, { useEffect } from 'react';

// const initializeMap = () => {
//   const myLatlng = new window.google.maps.LatLng(32.2396, 77.1887);

//   const mapOptions = {
//     zoom: 10,
//     zoomControl: true,
//     zoomControlOptions: {
//       style: window.google.maps.ZoomControlStyle.SMALL
//     },
//     center: myLatlng,
//     mapTypeId: window.google.maps.MapTypeId.ROADMAP,
//     mapTypeControl: false,
//     styles: [
//       {
//         "stylers": [
//           { "saturation": -100 }
//         ]
//       },
//       {
//         "elementType": "labels.icon",
//         "stylers": [
//           { "visibility": "off" }
//         ]
//       }
//     ]
//   };

//   const map = new window.google.maps.Map(document.getElementById("map-canvas"), mapOptions);

//   const marker = new window.google.maps.Marker({
//     position: new window.google.maps.LatLng(32.2396, 77.1887),
//     animation: window.google.maps.Animation.DROP,
//     map: map
//   });
// };

// const Location = () => {
//   useEffect(() => {
//     const loadGoogleMapsAPI = () => {
//       const script = document.createElement("script");
//       script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC3RxqDNHkn1phr1GBvU9kD5NGUznVkbtU&callback=initializeMap";
//       script.async = true;
//       script.defer = true;
//       script.addEventListener("load", initializeMap);
//       document.body.appendChild(script);
//     };

//     const mapContainer = document.getElementById('map-inner');
//     if (mapContainer) {
//       loadGoogleMapsAPI();
//     }
//   }, []);

//   return (
//     <div id="container">
//       <div id="map-canvas"></div>
//       <div id="map-inner" className="gradient-lateral">
//         <div className="overflow">
//           <h1>Manali, India</h1>
//           <p>
//             Manali is a beautiful hill station located in the Indian state of Himachal Pradesh. It is situated at an altitude of 2,050 meters (6,726 ft) in the Beas River Valley. Manali is known for its breathtaking natural beauty, snow-capped mountains, lush greenery, and adventure activities like trekking, skiing, and paragliding.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;




// import React, { useEffect } from 'react';

// const Location = () => {
//   const initializeMap = () => {
//     const myLatlng = new window.google.maps.LatLng(32.2396, 77.1887);

//     const mapOptions = {
//       zoom: 10,
//       zoomControl: true,
//       zoomControlOptions: {
//         style: window.google.maps.ZoomControlStyle.SMALL
//       },
//       center: myLatlng,
//       mapTypeId: window.google.maps.MapTypeId.ROADMAP,
//       mapTypeControl: false,
//       styles: [
//         {
//           "stylers": [
//             { "saturation": -100 }
//           ]
//         },
//         {
//           "elementType": "labels.icon",
//           "stylers": [
//             { "visibility": "off" }
//           ]
//         }
//       ]
//     };

//     const map = new window.google.maps.Map(document.getElementById("map-canvas"), mapOptions);

//     const marker = new window.google.maps.Marker({
//       position: new window.google.maps.LatLng(32.2396, 77.1887),
//       animation: window.google.maps.Animation.DROP,
//       map: map
//     });
//   };

//   useEffect(() => {
//     const loadGoogleMapsAPI = () => {
//       const script = document.createElement("script");
//       script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC3RxqDNHkn1phr1GBvU9kD5NGUznVkbtU&callback=initializeMap";
//       script.async = true;
//       script.defer = true;
//       script.addEventListener("load", initializeMap);
//       document.body.appendChild(script);
//     };

//     const mapContainer = document.getElementById('map-inner');
//     if (mapContainer) {
//       loadGoogleMapsAPI();
//     }
//   }, []);

//   return (
//     <div id="container">
//       <div id="map-canvas"></div>
//       <div id="map-inner" className="gradient-lateral">
//         <div className="overflow">
//           <h1>Manali, India</h1>
//           <p>
//             Manali is a beautiful hill station located in the Indian state of Himachal Pradesh. It is situated at an altitude of 2,050 meters (6,726 ft) in the Beas River Valley. Manali is known for its breathtaking natural beauty, snow-capped mountains, lush greenery, and adventure activities like trekking, skiing, and paragliding.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;



import React, { useEffect } from 'react';
import './Location.css'

const Location = () => {
  useEffect(() => {
    const initializeMap = () => {
      const myLatlng = new window.google.maps.LatLng(32.2396, 77.1887);

      const mapOptions = {
        zoom: 10,
        zoomControl: true,
        zoomControlOptions: {
          style: window.google.maps.ZoomControlStyle.SMALL
        },
        center: myLatlng,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        styles: [
          {
            "stylers": [
              { "saturation": -100 }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              { "visibility": "off" }
            ]
          }
        ]
      };

      const map = new window.google.maps.Map(document.getElementById("map-canvas"), mapOptions);

      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(32.2396, 77.1887),
        animation: window.google.maps.Animation.DROP,
        map: map
      });
    };

    const loadGoogleMapsAPI = () => {
      const script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC3RxqDNHkn1phr1GBvU9kD5NGUznVkbtU&callback=initializeMap";
      script.async = true;
      script.defer = true;
      window.initializeMap = initializeMap; // Assigning the function to the global scope
      script.addEventListener("load", initializeMap);
      document.body.appendChild(script);
    };

    const mapContainer = document.getElementById('map-inner');
    if (mapContainer) {
      loadGoogleMapsAPI();
    }
  }, []);
  
  
  return (
    <>
    {/* pHacQeebEjMF1PbI1m6lvwcPhaRmzK1n */}

    <div className='map-body' >
      <div id="container">
        <div id="map-canvas"></div>
        <div id="map-inner" className="gradient-lateral">
          <div className="overflow">
            <h1>Manali, India</h1>
            <p>
              Manali is a beautiful hill station located in the Indian state of Himachal Pradesh. It is situated at an altitude of 2,050 meters (6,726 ft) in the Beas River Valley. Manali is known for its breathtaking natural beauty, snow-capped mountains, lush greenery, and adventure activities like trekking, skiing, and paragliding.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Location;
