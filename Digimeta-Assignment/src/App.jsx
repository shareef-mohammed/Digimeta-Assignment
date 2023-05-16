import { useState } from "react"
import Body from "./components/Body"
import Navbar from "./components/Navbar"

function App() {
  const [sideBar, setSideBar] = useState(false)
  
  return (
    <div>
      <Navbar openSidebar={() => setSideBar(true)} />      
      <Body sideBar={sideBar} onClose={() => setSideBar(false)} />
    </div>
  )
}

export default App
