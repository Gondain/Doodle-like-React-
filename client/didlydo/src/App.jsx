import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Formulaire from "./components/Formulaire"
import EditFormulaire from "./components/EditEvent";
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/formulaire" element={<Formulaire/>}/>
        <Route path="/EditEvent" element={<EditFormulaire/>}/>
      </Routes>
    </Router>
  )
}

export default App
