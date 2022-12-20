import '../css/weather.css'
import { LocalInfo, Today, Weekly } from '../components'

export default function Weather({ today, weekly }) {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', padding: '3%', gap: '2rem' }}>
          
        <div>
            <LocalInfo today={today} />
          </div>
        
        <div>
          <Today today={today} />
        </div>
      </div>
      <div style={{ paddingBottom: '20px'}}>
        <Weekly weekData={weekly} />
      </div>
    </>
  );
}
