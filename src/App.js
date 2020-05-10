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
import { AirtimeContext } from './context/airtimeContext';

const App = () => {


  const [show, setShow] = React.useState(false)


  const AirtimeComponent = {
    show,
    hide: (value) => {
      setShow(value)
    }
  }


  return (
    <AirtimeContext.Provider value={{ ...AirtimeComponent }}>
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
    </AirtimeContext.Provider>
  )
}

export default App
