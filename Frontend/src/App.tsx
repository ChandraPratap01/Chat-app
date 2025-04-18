import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Chat from "./pages/Chat"



function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/room/:id" element={<Chat/>}/>
    </Routes>
   </Router>
  
  )
}

export default App
