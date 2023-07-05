import '../styles/MainHeader.css'

const MainHeader = () => {
  return (
    <div className='flex'>
      <div className='flex-col'>
        <div className='main-heading'>
          <strong>Welcome back Isabella!</strong>
        </div>
        <div>Check out today's weather information</div>
      </div>
      <div className='flex'>
        <span class='material-icons more_horiz'>more_horiz</span>
        <img src='avatar.jpeg' className='avatar' />
      </div>
    </div>
  )
}

export default MainHeader
