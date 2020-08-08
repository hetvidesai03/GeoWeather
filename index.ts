var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

function getWeather(coords) {
    var url = "https://api.darksky.net/forecast/a5ea3a75b7361771323e8adc14b09b66/" 
              + coords + "?exclude=minutely,hourly,flags" + "&units=si" + "&callback=?";

    $.getJSON(url, function(json) {
 
      document.getElementById('weather').innerHTML= 'The weather is'+' ' + json.currently["apparentTemperature"];
    });

  }
  
  function success(pos) {
    var crd = pos.coords;
    var coords = crd.latitude+','+ crd.longitude;
    
    getWeather(coords);

    document.getElementById('welcome').innerHTML='Your Current Location is:';
 
    document.getElementById('latitude').innerHTML=`Latitude: ${crd.latitude}`
    
    document.getElementById('longitude').innerHTML=`Longitude: ${crd.longitude}`
    
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);