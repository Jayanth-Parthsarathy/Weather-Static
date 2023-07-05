import '../styles/Humidity.css'
import { Line } from 'rc-progress'

const Humidity = () => {
  return (
    <div className='humidity-container'>
      <div className='humidity-header'>
        <h4>Humidity</h4>
        <span class='material-icons water_drop'>water_drop</span>
      </div>
      <div>
        <span className='humidity-percent'>82% {' '}</span>bad
      </div>
      <div className='humidity-line-container'>
        <div className='input-div'>
          good
          <Line
            percent={100}
            className='humidity-line'
            strokeWidth={4}
            strokeColor='#60a5fa'
          />
        </div>
        <div className='input-div'>
          normal
          <Line
            percent={100}
            className='humidity-line'
            strokeWidth={4}
            strokeColor='#60a5fa'
          />
        </div>
        <div className='input-div'>
          bad
          <Line
            percent={30}
            className='humidity-line'
            strokeWidth={4}
            strokeColor='#60a5fa'
          />
        </div>
      </div>
    </div>
  )
}

export default Humidity
