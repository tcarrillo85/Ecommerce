//Variables named in file and called upon from html using ID
const city = document.getElementById('city-name');
const show = document.getElementById('show-weather');
const zip_code = document.getElementById('zipcode');
const latitude = document.getElementById('lat');
const longitude = document.getElementById('lon');
const main = document.getElementById('weather-main');
const description = document.getElementById('weather-desc');
const speed = document.getElementById('wind-speed');
const degree = document.getElementById('wind-degree');
const current = document.getElementById('temp-current');
const minimum = document.getElementById('temp-min');
const maximum = document.getElementById('temp-max');
const humidity = document.getElementById('humidity');


//button named show and method named to be called
show.addEventListener('click', ()=> showWeather());

//API call method
async function showWeather() {
  let zipcode = zip_code.value
  /*Complete api call url that will take user input for zipcode. Used back-tick to make url work and also substitued country code with
  US and created account for unique API key*/
 await fetch (`https:api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=713d463f3f24af1462719e92fbd286e8&units=imperial`)
 .then(response => response.json())
 .then((data)=>{

/*left hand side holds constant attributes names as defined obove and right hand holds the field values in the JSON file*/
    city.innerHTML=data.name
   latitude.innerHTML=data.coord.lat
   longitude.innerHTML=data.coord.lon
   main.innerHTML=data.weather[0].main
   description.innerHTML=data.weather[0].description
   speed.innerHTML=data.wind.speed
   degree.innerHTML=data.wind.deg
   current.innerHTML=data.main.temp
   minimum.innerHTML=data.main.temp_min
   maximum.innerHTML=data.main.temp_max
   humidity.innerHTML=data.main.humidity
   //



 })
 };
