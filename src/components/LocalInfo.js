import '../css/localInfo.css'

export default function LocalInfo({ today: { city, country, date, population } }) {
  return (
    <div className='main-container'>
      <h3 style={{ paddingTop: '50px', fontWeight: 'normal' }}>
        {city}, {country}
      </h3>
      <h5 style={{ fontWeight: 'normal' }}>{date}</h5>
      <h6 style={{ fontWeight: 'normal' }}>
        Population: {population.toLocaleString()}
      </h6>
    </div>
  );
}
