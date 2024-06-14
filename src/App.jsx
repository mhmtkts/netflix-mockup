
import { Switch,Route } from 'react-router-dom/'
import './App.css'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import { useState } from 'react'

function App() {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <SignIn/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/welcome">
          <Welcome setActiveProfile={setActiveProfile}/>
        </Route>
        <Route exact path="/home">
          <Home activeProfile={activeProfile}/>
        </Route>


      </Switch>
    </>
  )
}

export default App
