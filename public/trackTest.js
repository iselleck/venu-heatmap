window.onload = drawMap;


var map, buton;
var route = [];
var markers = [];


firebase.initializeApp({
  "apiKey": "AIzaSyB_dwG4qtan4dhvvpbjKG9rzkEbVPYklEs",
  "databaseURL": "https://venu-754b2.firebaseio.com",
  "storageBucket": "venu-754b2.appspot.com",
  "authDomain": "heatmaptest-d80f8.firebaseapp.com",
  "messagingSenderId": "131036382275",
  "projectId": "venu-754b2"
});


firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
      
      if(buton != undefined){
        buton.addEventListener("click", displayMarkers());
      }
      
    var uid = user.uid;
        var heatmap = new google.maps.visualization.HeatmapLayer({
        data: [],
        radius: 20,
        dissipating: true,
        maxIntensity: 10,
        gradient: [
            'rgba(98, 210, 162, 0   )',
            'rgba(98, 210, 162, 1)',
             'rgba(250, 168, 66, 1)',
             'rgba(255, 46, 53, 1)',
        ],
        map: map
    });
      
    
     getPoints(heatmap);
      
   
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});



  var database = firebase.database();


var locations = firebase.database().ref("locations").orderByKey();


function drawMap() {



    // make a map 
    map = new google.maps.Map(document.getElementById('map_div'), {
        zoom: 17,
        center: {
            lat: 43.084633,
            lng:  -77.675871
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
    
    
    

}



function getPoints(heatmap) {
    
    locations.on("value", function(snapshot) {
     snapshot.forEach(function(childSnapshot){
         var key = childSnapshot.key;
         var childData = childSnapshot.val();
         var realData = childData.split(',');
         var lat, lng;
         lat = parseFloat(realData[0]);
         lng = parseFloat(realData[1]);
         var point = new google.maps.LatLng(lat, lng);
         heatmap.getData().push(point);
         markers.push(point);
        
     });
        
}); 
}



