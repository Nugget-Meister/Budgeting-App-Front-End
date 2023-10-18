import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React from "react";

import NavBar from "./components/common/NavBar";

import Index from "./components/Index/Index";
import NewForm from "./components/Form/NewForm";
import EditForm from "./components/Form/EditForm";
import ShowDetails from "./components/ShowDetails/ShowDetails";

// import './App.css'

function App() {


  return (
    <>
      <Router>
        <main>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/new" element={<NewForm/>}/>
            <Route path="/:id/edit" element={<EditForm/>}/>
            <Route path="/:id" element={<ShowDetails/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
