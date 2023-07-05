import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import "./styles/App.css"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
