import { Circle } from 'rc-progress'
import "../styles/Wind.css"
import React from 'react'

const Wind = () => {
  return (
    <div className='wind-container'>
      <div className='wind-header'>
        <h3>Wind</h3>
        <span class='material-icons'>air</span>
      </div>
      <div className='circle-container'>
        <h3 className='wind-info'>10 km/h</h3>
        <Circle className='windmeter' percent={70} strokeWidth={8} strokeColor="#60a5fa" />
      </div>
    </div>
  )
}

export default Wind
