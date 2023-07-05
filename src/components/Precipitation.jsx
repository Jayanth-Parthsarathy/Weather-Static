import "../styles/Precipitation.css"
import Blob from './Blob'

const Precipitation = () => {
  return (
    <div className="precipitation-container">
      <div className="precipitation-header">
        <h3>Precipitation</h3>
        <span class='material-icons'>thunderstorm</span>
      </div>
      <div>
        <div className="precipitation-unit">1.4cm</div>
        <div className='blobs-container'>
          <Blob number={'10'} />
          <Blob number={'20'} />
          <Blob number={'30'} />
          <Blob number={'40'} />
          <Blob number={'50'} />
          <Blob number={'60'} />
          <Blob number={'70'} />
          <Blob number={'80'} />
          <Blob number={'90'} />
        </div>
      </div>
    </div>
  )
}

export default Precipitation
