

$(document).ready(function(){
  let icon;
  let geo_options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };


  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(location, error, geo_options);
  }else{
    alert('your browser does not support geolocation');
  }
// Cash Goelocation Data
  function location(current){
    // latittude
  let lat = current.coords.latitude;
    // longitude
    let long = current.coords.longitude;
  
    //Ajax request for current weather conditions
<<<<<<< HEAD
    $.get("https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + long + "&appid=8023c0427a071f0e4e0cf59a29b110fb", function(weather_data) {

      icon = weather_data.weather[0].icon;
      let temp = weather_data.main.temp;
=======
    $.get("https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + long + "&appid=[insert your API key here]", function(weather_data) {
  
      var icon = weather_data.weather[0].icon;
      var temp = weather_data.main.temp;
>>>>>>> e029c1ddb366109164b71758bd8278698b2c01bd
      
      // Weather Data passed to HTML classes         
      $('.city').html(weather_data.name + ", " + weather_data.sys.country);
      $('#weather-image').html("<img src=http://openweathermap.org/img/w/" + icon + ".png>");
      $('#temp').html(Math.round(temp) + " °C");
      $('#cond').html(weather_data.weather[0].description);
      
      //Change degree format button
      $('button').click(function(){
        if( temp === weather_data.main.temp){
          temp = temp * 1.8 + 32;
         $('#temp').html(Math.round(temp) + " °F"); 
        }else if(temp !== weather_data.main.temp){
          temp = weather_data.main.temp;
          $('#temp').html(Math.round(temp) + " °C");
        }else{};
      });
      
      
 //Changing backgrounds depending on weather icon     
 switch(icon){
  case "01d":
    $('body').css('background-image' ,'url ("https://www.hdwallpapers.in/walls/morning_sunshine-HD.jpg")');
    break;
    
  case "01n":
    $('body').css('background-image' ,'url("http://www.wallpaperbetter.com/wallpaper/401/7/649/nature-landscape-night-stars-long-exposure-clear-sky-tower-trees-milky-way-wheels-silhouette-1080P-wallpaper.jpg")');
    break;
    
  case "02d":
    $('body').css('background-image' , 'url("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/plane-flying-across-partly-cloudy-sky_-yvbehuxs__F0000.png")');
    break;
    
  case "02n":
    $('body').css('background-image' , 'url("http://www.roseparkpsychology.com.au/wp-content/uploads/2016/11/after-hours-psychologist.jpg")');
    break;
    
  case "03d":
    $('body').css('background-image', 'url("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/plane-flying-across-partly-cloudy-sky_-yvbehuxs__F0000.png")');
    break; 
    
  case "03n":
    $('body').css('background-image-image',  'url("http://www.roseparkpsychology.com.au/wp-content/uploads/2016/11/after-hours-psychologist.jpg")');
    break;
    
  case "04d":  
    $('body').css('background-image','url("http://www.roseparkpsychology.com.au/wp-content/uploads/2016/11/after-hours-psychologist.jpg")');
    break;
    
  case "04n":  $('body').css('background-image','url("http://www.roseparkpsychology.com.au/wp-content/uploads/2016/11/after-hours-psychologist.jpg")');
    break;
    
  case "09d":  
    $('body').css('background-image','url("https://wallpaperscraft.com/image/rain_drops_splashes_splash_49951_3840x2160.jpg")');
    break;
    
  case "09n":     $('body').css('background-image','url("https://wallpaperscraft.com/image/rain_drops_splashes_heavy_rain_dullness_bad_weather_60638_3840x2160.jpg")');
    break;
    
  case "10d":  
    $('body').css('background-image','url("https://images4.alphacoders.com/235/235564.jpg")');
    break;
    
  case "10n":  $('body').css('background-image','url("https://wallpaperscraft.com/image/rain_drops_splashes_heavy_rain_dullness_bad_weather_60638_3840x2160.jpg")');
    break;
    
  case "11d":  $('body').css('background','url("https://wallpaperscraft.com/image/lightning_thunderstorm_sky_cloudy_116548_3840x2160.jpg")');
    break;
    
  case "11n":  $('body').css('background-image','url("https://wallpaperscraft.com/image/lightning_thunderstorm_sky_cloudy_116548_3840x2160.jpg")');
    break;
    
  case "13d":  
    $('body').css('background-image','url("https://wallpaperscraft.com/image/snowfall_winter_precipitation_trees_60966_3840x2160.jpg")');
    break;
    
  case "13n":  $('body').css('background','url("https://upload.wikimedia.org/wikipedia/commons/3/3c/Free_snowflakes_falling_at_Night_texture_for_layers_Creative_Commons_%283061623692%29.jpg")');
    break;
    
  case "50d":  
    $('body').css('background','url("http://viavasterbotten.se/wp-content/uploads/2012/09/sara+ingman-fog-1721.jpg")');
    break;
    
  case "50n":  $('body').css('background','url("http://www.desktopimages.org/pictures/2013/1029/4/orig_22288.jpg")');
    break;
    
  default:
 $('body').css('background', 'Darkblue');
      };
      console.log(icon);
  
      }
    );
  };
//Goelacation Error Handling 
  function error(code){
    alert('the app encountered an error: '+ code);
  };
  
});



   
  
  
  
  
  
