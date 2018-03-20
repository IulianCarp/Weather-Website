$(document).ready(function() {
  var lat;
  var long;
  var temp;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    var api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=783a15fc1761de06919dbb2b87018483"
    console.log(api);
      
      $.getJSON(api, function(data) {
       var city = data.name;
       var country = data.sys.country;
       var tempK = data.main.temp;
       var condition = data.weather[0].main;
       var tempC = Math.floor(tempK - 273.15);
       var tempF = tempC * (9 / 5) + 32;
       var dayNight = data.weather[0].icon[2];
       var temper = 0;
       var getImageSrc;
       var img;
        if(condition==="Clouds") {
          img="<img src='https://s19.postimg.org/4m3k2jijn/Cloud.png'>";
        }
        else if(condition==="Drizzle") {
          img="<img src='https://s19.postimg.org/ts4i9drjn/Drizzle.png'>";
        }
        else if(condition==="Rain") {
          img="<img src='https://s19.postimg.org/z3jeu40rn/Rain.png'>";
        }
        else if(condition==="Snow") {
          img="<img src='https://s19.postimg.org/crlm0q9df/Snow.png'>";
        }
        else if(condition==="Clear") {
          img="<img src='https://s19.postimg.org/ji23a5h3n/Sun.png'>";
        }
        else if(condition==="Thunderstorm") {
          img="<img src='https://s19.postimg.org/85phsdvk3/Thunderstorm.png'>";
        }
        else if(condition==="Wind") {
          img="<img  src='https://s19.postimg.org/aa9utg2bn/Wind.png'>";
        }
        else {
          img="<img src='https://s19.postimg.org/ye0mhpxn7/Misc.png'>";
        }
 {      
         if (condition==="Clouds" && dayNight==="d") {
         var getImageSrc = "http://cdnfiles.hdrcreme.com/49001/original/cloudy-day.jpg";
         }
        else if (condition==="Clouds" && dayNight==="n"){
          var getImageSrc = "https://s19.postimg.org/fhvv0obnn/clouds-night.jpg";
        }
        else if (condition==="Clear" && dayNight==="d"){
          var getImageSrc = "https://s19.postimg.org/xkoxru2cj/clear-day.jpg";
        }
        else if (condition==="Clear" && dayNight==="n"){
          var getImageSrc = "https://s19.postimg.org/r6zuokpqr/clear-night.jpg";
        }
        else if (condition==="Drizzle" && dayNight==="d"){
          var getImageSrc = "https://s19.postimg.org/946rxim83/drizzle-day.jpg";
        }
        else if (condition==="Drizzle" && dayNight==="n"){
          var getImageSrc = "https://s19.postimg.org/m8cca3jdv/drizzle-night.jpg";
        }
        else if (condition==="Rain" && dayNight==="d"){
          var getImageSrc = "https://s19.postimg.org/z68sxl4kz/rain-day.jpg";
        }
        else if (condition==="Rain" && dayNight==="n"){
          var getImageSrc = "https://s19.postimg.org/rq9jbs1g3/rain-night.jpg";
        }
        else if (condition==="Snow" && dayNight==="d"){
          var getImageSrc = "https://s19.postimg.org/e2uac1ib7/snow-day.jpg";
        }
        else if (condition==="Snow" && dayNight==="n"){
          var getImageSrc = "https://s19.postimg.org/3mirnilk3/snow-night.jpg";
        }
        else if (condition==="Thunderstorm" && dayNight==="d"){
          var getImageSrc = "https://s19.postimg.org/63uiuq80j/thunderstorm-day.jpg";
        }
        else if (condition==="Thunderstorm" && dayNight==="n"){
          var getImageSrc = "https://s19.postimg.org/foe5hlpmr/thunderstorm-night.jpg";
        }
        else if (condition==="Wind" && dayNight==="d"){
          var getImageSrc = "https://s19.postimg.org/apqn35lur/wind-day.jpg";
        }
        else if (condition==="Wind" && dayNight==="n"){
          var getImageSrc = "https://s19.postimg.org/6mv0q9hr7/wind-night.png";
        }
        else if (dayNight==="d"){
          var getImageSrc = "https://s19.postimg.org/s9a1753f7/mist-day.jpg";
        }
        else if (dayNight==="n"){
          var getImageSrc = "https://s19.postimg.org/m8cca2937/mist-night.jpg";
        }
 }       
        
       $("#weatherIcon").html(img);
       $("#temperature").html(tempC + " ºC"); 
       $("#location").html(city + ", " + country); 
       $('body').css('background-image', 'url(' + getImageSrc + ')');
        
       document.getElementById("temperature").onclick = function() {changeTemp()}; 
        
       function changeTemp() {
         
         if (temper%2==0) {
           $("#temperature").html(tempF + " ºF");
           temper += 1;
         }
         else {
           $("#temperature").html(tempC + " ºC"); 
           temper += 1;
         }
       }
});
      });
      
  };
  });
