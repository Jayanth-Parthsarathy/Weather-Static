import "../styles/Sidebar.css"
import SidebarContent from "./SidebarContent"
import SidebarHeader from "./SidebarHeader"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarHeader />
      <SidebarContent />
    </div>
  )
}

export default Sidebar
