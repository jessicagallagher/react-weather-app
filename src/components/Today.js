import '../css/today.css'
import pressure from '../assets/images/pressure.png';
import wind from '../assets/images/wind.png';
import humidity from '../assets/images/humidity.png';
import sunset from '../assets/images/sunset.png';
import sunrise from '../assets/images/sunrise.png';

export default function Today({ today }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className='main-container'>
      <div className='today-container'>
        <img
          src={`https://openweathermap.org/img/w/${today.icon}.png`}
          alt={today.icon}
          style={{ height: '90px', width: '90px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div>
            <h3 style={{ fontWeight: 'normal', textAlign: 'left' }}>{Math.round(today.temp)}° F</h3>
            <h6 style={{ fontWeight: 'normal', textAlign: 'left', textTransform: 'capitalize' }}>
              {today.main}—{today.description}
            </h6>
          </div>
        </div>
        <div className='weather-icons'>
          <img src={pressure} alt='pressure icon' />
          <span>{today.pressure} hPa</span>
          <img src={humidity} alt='humidity icon' />
          <span>{today.humidity}%</span>
          <img src={wind} alt='wind logo' />
          <span>{today.wind} m/s</span>
        </div>
      </div>
      <div className='sunrise-sunset'>
        <div>
          <img src={sunrise} alt='sunrise icon' />
          <span>{today.sunrise} AM</span>
        </div>
        <div>
          <img src={sunset} alt='sunset icon' />
          <span>{today.sunset} PM</span>
        </div>
      </div>
    </div>
  );
}
