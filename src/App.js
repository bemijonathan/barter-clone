import React from 'react'
import { Router, Redirect } from '@reach/router'
// import Home from './Pages/Home/Home';
// import Nav from './components/Navbar'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import DashboardHome from './Pages/DashboardHome';
import Dashboard from './Pages/Dashboard';
import Cards from './Pages/Cards'
import Transactions from './Pages/Transactions';
import { AirtimeContext , Authenticated} from './context/airtimeContext';
import 'react-notifications/lib/notifications.css';
import jwt from 'jsonwebtoken'


const App = () => {
  const [show, setShow] = React.useState(false)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  const AirtimeComponent = {
    show,
    hide: (value) => {
      setShow(value)
    }
  }
  
  const authentication = async () => {
     const token = await localStorage.getItem('auth-token')
    if(token){
      const user = jwt.decode(token)
      if(Math.floor(Date.now() / 1000) + (60 * 60) < user.exp){
        setIsAuthenticated(true)
      }else{
        localStorage.removeItem("auth-token")
        setIsAuthenticated(false)
      }
    }else{
      setIsAuthenticated(false)
    }    
    console.log(isAuthenticated)
  }

  React.useEffect(() => {
    authentication()
  })
 

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    console.log('*************', isAuthenticated)
    return (
    <Authenticated.Consumer>
      {(isAuthenticated) =>
        isAuthenticated ? <Component {...rest} /> : <Redirect from="" to="/" noThrow />
      }
    </Authenticated.Consumer>
  )};

  return (
    <Authenticated.Provider value={isAuthenticated} >
    <AirtimeContext.Provider value={{ ...AirtimeComponent }}>
      <div>
        {/* <Nav /> */}
        <Router>
          <ProtectedRoute path="dashboard" component={Dashboard} >
            <DashboardHome path="/" />
            <Cards path="/cards" />
            <Transactions path="/transactions" />
          </ProtectedRoute>
          <Login path="/" />
          <Signup path="/signup" />

        </Router>
      </div>
    </AirtimeContext.Provider>
    </Authenticated.Provider>
  )
}

export default App
