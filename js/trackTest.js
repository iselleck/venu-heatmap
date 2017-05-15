window.onload = drawMap;
setInterval(getLocation, 10000);

var map, heatmap;
var route = [];


 // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyB_dwG4qtan4dhvvpbjKG9rzkEbVPYklEs",
    authDomain: "heatmaptest-d80f8.firebaseapp.com",
    databaseURL: "https://venu-754b2.firebaseio.com/",
    storageBucket: "gs://venu-754b2.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
//console.log(database);


var locations = firebase.database().ref("locations").orderByKey();

//locations.once("value")
//    .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot){
//         var key = childSnapshot.key;
//         var childData = childSnapshot.val();
//         console.log(childData);
//     });
//});

function drawMap() {

    // make a map 
    map = new google.maps.Map(document.getElementById('map_div'), {
        zoom: 3,
        center: {
            lat: 20,
            lng: -65.9
        },
        styles: [
  { "stylers": [ { "hue": "#00ffe6" }, { "saturation": -20 } ] },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#a0a0a0"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#e8e7e8"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e8e7e8"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#f6f6f6"
      }
    ]
  }
],
        mapTypeId: 'terrain'
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        radius: 20,
        dissipating: true,
        maxIntensity: .5,
        map: map
    });
    
    locations.once("value")
    .then(function(snapshot) {
     snapshot.forEach(function(childSnapshot){
         var key = childSnapshot.key;
         var childData = childSnapshot.val();
         console.log(childData);
     });
});
    getLocation();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(zoomToPos);
    } else {

    }

}

function zoomToPos(position) {
    map.setZoom(20);
    map.panTo({
        lat: position.coords.latitude,
        lng: position.coords.longitude
    });

    var marker = new google.maps.Marker({
        position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        },
        map: map
    });

    route.push(marker);
//    console.log(route.length);
}



function getPoints() {
    return [
    new google.maps.LatLng(43.084646, -77.680861),
    new google.maps.LatLng(43.084645, -77.680761),
    new google.maps.LatLng(43.084644, -77.680661),
    new google.maps.LatLng(43.084643, -77.680561),
    new google.maps.LatLng(43.084642, -77.680461),
    new google.maps.LatLng(43.084641, -77.680361),
    new google.maps.LatLng(43.08464, -77.680261),
    new google.maps.LatLng(43.084639, -77.680161),
    new google.maps.LatLng(43.084638, -77.680061),
    new google.maps.LatLng(43.084637, -77.679961),
    new google.maps.LatLng(43.084636, -77.679861),
    new google.maps.LatLng(43.084635, -77.679761),
    new google.maps.LatLng(43.084634, -77.679661),
    new google.maps.LatLng(43.084633, -77.679561),
    new google.maps.LatLng(43.084632, -77.679461),
    new google.maps.LatLng(43.084631, -77.679361),
    new google.maps.LatLng(43.084491, -77.679896),
    new google.maps.LatLng(43.084466, -77.679895),
    new google.maps.LatLng(43.084441, -77.679894),
    new google.maps.LatLng(43.084416, -77.679893),
    new google.maps.LatLng(43.084391, -77.679892),
    new google.maps.LatLng(43.084366, -77.679891),
    new google.maps.LatLng(43.084341, -77.67989),
    new google.maps.LatLng(43.084316, -77.679889),
    new google.maps.LatLng(43.084291, -77.679888),
    new google.maps.LatLng(43.084266, -77.679887),
    new google.maps.LatLng(43.084241, -77.679886),
    new google.maps.LatLng(43.084216, -77.679885),
    new google.maps.LatLng(43.084191, -77.679884),
    new google.maps.LatLng(43.084166, -77.679883),
    new google.maps.LatLng(43.084141, -77.679882),
    new google.maps.LatLng(43.084116, -77.679881),
    new google.maps.LatLng(43.084091, -77.67988),
    new google.maps.LatLng(43.084066, -77.679879),
    new google.maps.LatLng(43.084041, -77.679878),
    new google.maps.LatLng(43.084016, -77.679877),
    new google.maps.LatLng(43.083991, -77.679876),
    new google.maps.LatLng(43.083966, -77.679875),
    new google.maps.LatLng(43.083941, -77.679874),
    new google.maps.LatLng(43.083916, -77.679873),
    new google.maps.LatLng(43.083891, -77.679872),
    new google.maps.LatLng(43.083866, -77.679871),
    new google.maps.LatLng(43.083841, -77.67987),
    new google.maps.LatLng(43.083816, -77.679869),
    new google.maps.LatLng(43.083791, -77.679868),
    new google.maps.LatLng(43.083766, -77.679867),
    new google.maps.LatLng(43.083741, -77.679866),
    new google.maps.LatLng(43.083716, -77.679865)
    ];
}

