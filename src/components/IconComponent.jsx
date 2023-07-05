import WbSunny from './WbSunny'
import WbCloudy from './WbCloudy'
import '../styles/IconComponent.css'
const IconComponent = ({ time, temperature, weather }) => {
  return (
    <div className='icon-container'>
      <div>{time}</div>
      <div>{weather ? <WbSunny /> : <WbCloudy />}</div>
      <div className=''>{temperature}°</div>
    </div>
  )
}

export default IconComponent
