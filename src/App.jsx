import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React from "react";
import Index from "./components/Index/Index";

// import './App.css'

function App() {


  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/New" element={<Index/>}/>
            <Route path="/:id/edit" element={<Index/>}/>
            <Route path="/:id" element={<Index/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
