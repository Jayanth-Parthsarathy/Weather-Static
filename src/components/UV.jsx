import Blob from './Blob'
import WbSunny from "./WbSunny"
import "../styles/UV.css"

const UV = () => {
  return (
    <div className='uv-container'>
      <div className='uv-header'>
        <h3>UV index</h3>
        <WbSunny />
      </div>
      <h1 className='uv-value'>4 Medium</h1>
      <div className='uv-blob-container'>
        <Blob number='0-2' />
        <Blob number='3-5' />
        <Blob number='6-7' />
        <Blob number='8-10' />
        <Blob number='11+' />
      </div>
    </div>
  )
}

export default UV
