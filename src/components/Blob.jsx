import { Line } from 'rc-progress'
import "../styles/Blob.css"

const Blob = ({ number }) => {
  return (
    <div className=''>
      <p>{number}</p>
      <Line
        percent={80}
        strokeWidth={7}
        className='blob'
        strokeColor='#8f9bf7'
      />
    </div>
  )
}

export default Blob
