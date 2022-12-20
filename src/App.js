import { useState, useEffect } from 'react';
import axios from 'axios';
import { forecast } from './utils/api';
import './App.css';
import mainBg from './assets/images/mainBg.png';
import clear from './assets/images/clear.png';
import thunderstorm from './assets/images/thunderstorm.png';
import drizzle from './assets/images/drizzle.png';
import rain from './assets/images/rain.png';
import snow from './assets/images/snow.png';
import smoke from './assets/images/smoke.png';
import dust from './assets/images/dust.png';
import squall from './assets/images/squall.png';
import tornado from './assets/images/tornado.png';
import clouds from './assets/images/clouds.png';
import { Search, Loader, Weather } from './components';

function App() {
  const [state, setState] = useState({
    value: '',
    current: {},
    weekInfo: [],
    loading: false,
    error: false,
  });
  const [bgImg, setBgImg] = useState(mainBg);

  const getBg = () => {
    switch (state.current.main) {
      case 'Thunderstorm':
        setBgImg(thunderstorm);
        break;

      case 'Drizzle':
      case 'Mist':
        setBgImg(drizzle);
        break;

      case 'Rain':
        setBgImg(rain);
        break;

      case 'Clouds':
        setBgImg(clouds);
        break;

      case 'Snow':
        setBgImg(snow);
        break;

      case 'Smoke':
      case 'Haze':
      case 'Fog':
      case 'Ash':
        setBgImg(smoke);
        break;

      case 'Dust':
      case 'Sand':
        setBgImg(dust);
        break;

      case 'Squall':
        setBgImg(squall);
        break;

      case 'Tornado':
        setBgImg(tornado);
        break;

      case 'Clear':
        setBgImg(clear);
        break;

      default:
        setBgImg(mainBg);
    }
  }

  useEffect(() => {
    getBg();
  }, [getBg])

  const handleChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setState({
      ...state,
      loading: true,
    });
    axios
      .get(forecast(state.value))
      .then((res) => {
        const data = res.data;
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];

        const days = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]}, ${
          months[currentDate.getMonth()]
        } ${currentDate.getDate()}, ${currentDate.getFullYear()} `;
        const sunset = new Date(data.list[0].sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        const sunrise = new Date(data.list[0].sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        const current = {
          city: data.city.name,
          country: data.city.country,
          date,
          population: data.city.population,
          description: data.list[0].weather[0].description,
          main: data.list[0].weather[0].main,
          icon: data.list[0].weather[0].icon,
          temp: data.list[0].temp.day,
          hTemp: data.list[0].temp.max,
          lTemp: data.list[0].temp.min,
          sunrise,
          sunset,
          clouds: data.list[0].clouds,
          humidity: data.list[0].humidity,
          wind: data.list[0].speed,
          pressure: data.list[0].pressure,
        };
        const weekData = data.list;
        const weekInfo = weekData.map((data, index) => {
          return {
            key: index,
            main: data.weather[0].main,
            day: new Date(data.dt * 1000)
              .toLocaleString('en-us', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })
              .slice(0, 3),
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            hTemp: data.temp.max,
            lTemp: data.temp.min,
          };
        });

        setState({
          ...state,
          current,
          weekInfo,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        console.log(error);
        setState({
          ...state,
          loading: false,
          error: true,
          current: {},
          weekInfo: [],
        });
      });
  };

  return (
      <div
        style={{
          backgroundImage: 'url(' + bgImg + ')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'fill',
        minHeight: '100vh',
        }}
      >
        <Search
          value={state.value}
          data={state}
          showResult={(state.weatherInfo || state.error) && true}
          change={handleChange}
          submit={handleSearch}
        />
        {state.loading === true ? (
          <Loader />
        ) : (
          <div>
            {state.current.country !== undefined ? (
              <div className='weather'>
                <Weather today={state.current} weekly={state.weekInfo} />
              </div>
            ) : state.error ? (
              <p className='error__loc'>
                Sorry! We don't have any information on specified location.
              </p>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
  );
}

export default App;
