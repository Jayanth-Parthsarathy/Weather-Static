import Humidity from './Humidity'
import '../styles/MiniChart.css'
import Wind from './Wind'
import Precipitation from './Precipitation'
import UV from './UV'
import Feels from './Feels'
import RainChance from './RainChance'
const MiniChart = () => {
  return (
    <div>
      <h3 className='minichart-header'>
        <strong>More details about today's weather</strong>
      </h3>
      <div className='minichart-container'>
        <Humidity />
        <Wind />
        <Precipitation />
        <UV />
        <Feels />
        <RainChance />
      </div>
    </div>
  )
}

export default MiniChart
