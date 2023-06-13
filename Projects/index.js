const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDeets = document.querySelector('.weather-deets');
const error404 = document.querySelector('.not-found');


search.addEventListener('click', () =>{
    const APIKey = 'b039af501f43645908e6afd71b11096f';
    const city = document.querySelector('.search-box input').value;

    if(city === '')
         return;


         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
         .then(response => response.json()).then(json =>
    {
        if(json.cod ==='404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDeets.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
          error404.classList.remove('fadeIn');

          const image = document.querySelector('.weather-box img');
          const temp = document.querySelector('.weather-box .temp');
          const describe = document.querySelector('.weather-box .describe');
          const humidity = document.querySelector('.weather-deets .humidity span');
          const wind = document.querySelector('.weather-deets .wind span');


          switch(json.weather[0].main){
            case 'Clear':
  image.src = 'images/clear.png';
  break;
  case 'Clear':
    image.src = 'images/clear.png';
    break;
  case 'Clouds':
    image.src = 'images/cloud.png';
    break;
  case 'Mist':
    image.src = 'images/fog.png';
    break;
    case 'Rain':
        if (json.weather[0].description === 'light rain') {
          image.src = 'images/drizzle.png';
        } else {
          image.src = 'images/rain.png';
        }
        break;
  case 'Snow':
    image.src = 'images/snow.png';
    break;
  case 'Thunderstorm':
    image.src = 'images/thunderstorm.png';
    break;
  case 'Smoke':
    image.src = 'images/smoke.png';
    break;
  case 'Haze':
    image.src = 'images/haze.png';
    break;
    case 'Dust':
        image.src = 'images/dust.png';
        break;
  case 'Fog':
    image.src = 'images/fog.png';
    break;
  case 'Tornado':
    image.src = 'images/tornado.png';
    break;


                default:
                    image.src = '';
          }

          temp.innerHTML = `${parseInt(json.main.temp)}<span>°C </span>`;
          describe.innerHTML = `${json.weather[0].description}`;
          humidity.innerHTML = `${json.main.humidity}%`;
          wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

         weatherBox.style.display = '';
         weatherDeets.style.display = '';
         weatherBox.classList.add('fadeIn');
         weatherDeets.classList.add('fadeIn');
         container.style.height = '590px';
    })
})