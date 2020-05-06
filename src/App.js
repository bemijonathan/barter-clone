import React from 'react'
import { Button } from 'reactstrap';
import { Router } from '@reach/router'
import Home from './Pages/Home/Home';
import Nav from './components/Navbar'
const App = () => {
  return (
    <div>
      <Nav />
      <Router>
        <Home path="/" />
      </Router>
    </div>
  )
}

export default App