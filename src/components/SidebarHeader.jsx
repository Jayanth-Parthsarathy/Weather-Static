import '../styles/SidebarHeader.css'
import { useState } from 'react'
const SidebarHeader = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='sidebar-header'>
      <span className='material-icons add_box-icon'>add_box</span>
      <div className='blob-container'>
        <input disabled className='big-blob' type='text' />
        <div className='blob'></div>
        <div className='blob'></div>
      </div>
      <div className='toggle-container' onClick={() => setToggle(!toggle)}>
        <span className='toggle-temp'> °C</span>
        {toggle ? (
          <span className='material-icons toggle_on'>toggle_on</span>
        ) : (
          <span className='material-icons toggle_off'>toggle_off</span>
        )}
        <span className='toggle-temp'> °F</span>
      </div>
    </div>
  )
}

export default SidebarHeader
