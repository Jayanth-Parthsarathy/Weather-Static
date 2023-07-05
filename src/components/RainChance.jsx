import { Line } from 'rc-progress'
import "../styles/Feels.css"

const RainChance = () => {
  return (
    <div className='feels-container'>
      <div className='feels-header'>
        <h3>Chance of Rain</h3>
        <span class='material-icons'>beach_access</span>
      </div>
      <h1 className='feels-value'>42%</h1>
      <div className='feels-line-container'>
        <Line percent={42} strokeWidth={4} className='feels-line' strokeColor='#60a5fa' />
      </div>
    </div>
  )
}

export default RainChance

