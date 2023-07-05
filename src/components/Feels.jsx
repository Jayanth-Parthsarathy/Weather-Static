import { Line } from 'rc-progress'
import "../styles/Feels.css"

const Feels = () => {
  return (
    <div className='feels-container'>
      <div className='feels-header'>
        <h3>Feels Like</h3>
        <span class='material-icons'>thermostat</span>
      </div>
      <h1 className='feels-value'>30 °</h1>
      <div className='feels-line-container'>
        <Line percent={70} strokeWidth={4} className='feels-line' strokeColor='#60a5fa' />
      </div>
    </div>
  )
}

export default Feels
