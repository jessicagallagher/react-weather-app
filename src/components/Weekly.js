import '../css/weekly.css'

export default function Weekly({ weekData }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '3%',
      }}
      className='weekly-container'
    >
      {weekData.map((data) => (
        <div>
          {data.key === 0 ? (
            <h3
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Poppins',
              }}
            >
              Today
            </h3>
          ) : (
            <h3
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Poppins',
              }}
            >
              {data.day}
            </h3>
          )}

          <img
            src={`https://openweathermap.org/img/w/${data.icon}.png`}
            alt={data.icon}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />

          <h3
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Poppins',
            }}
          >
            {Math.round(data.lTemp)}°F - {Math.round(data.hTemp)}°F
          </h3>
          <h3
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Poppins',
            }}
          >
            {data.main}
          </h3>
          <h4
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Poppins',
              textTransform: 'capitalize',
            }}
          >
            {data.description}
          </h4>
        </div>
      ))}
    </div>
  );
}
