
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import { Route } from 'react-router-dom/cjs/react-router-dom'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Home from './pages/Home'

function App() {


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
          <Welcome/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>


      </Switch>
    </>
  )
}

export default App
