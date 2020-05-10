import React from 'react'
import { Router } from '@reach/router'
// import Home from './Pages/Home/Home';
// import Nav from './components/Navbar'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import DashboardHome from './Pages/DashboardHome';
import Dashboard from './Pages/Dashboard';
import Cards from './Pages/Cards'
import Transactions from './Pages/Transactions';

const App = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Router>
        <Dashboard path="dashboard" >
          <DashboardHome path="/" />
          <Cards path="/cards" />
          <Transactions path="/transactions" />

        </Dashboard>
        <Login path="/" />
        <Signup path="/signup" />

      </Router>
    </div>
  )
}

export default App