import "../styles/SidebarContent.css"
const SidebarContent = () => {
  return (
    <div className="sidebar-content">
      <div>
        <div className="sidebar-row">
          <div className="sidebar-icon-text">
            <span class='material-icons near_me-icon'>near_me</span>
            <span className="typography">New York, USA</span>
          </div>
          <div className="sidebar-icon-text">
            <span class='material-icons wb-icon'>wb_twilight</span>
            07:19
          </div>
        </div>
        <div className="sidebar-row">
          <div>Today, 28 Sept</div>
          <div className="sidebar-icon-text">
            <span class='material-icons'>wb_twilight</span> 19:32
          </div>
        </div>
      </div>
      <div className="sidebar-row-2">
        <div className="nav-icon-container">
          <span class="material-icons nav-icon">
            chevron_left
          </span>
          <span className="large-text">27°</span>
          <span class="material-icons nav-icon">
            chevron_right
          </span>
        </div>
        <div className="bottom-row">
          <span class="material-icons">
            wb_sunny
          </span>
          Sunny
        </div>
      </div>
    </div >
  )
}

export default SidebarContent
