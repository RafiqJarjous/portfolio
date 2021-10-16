import React from 'react'
import Header from './components/header'
import Body from './components/body'
import './App.css'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Map from './components/map'
import Homepage from './homepage'
import Navbar from './components/navbar'
import VPN from './components/vpn'
import PWM from './components/pwm'
import Alarm from './components/alarm'
import Stream from './components/stream'
import TodoList from './components/todolist'


function App (){
  return(
<div>

  <div>
    
  </div>
    <div>
      <Router>
        <Header />
        
        <Switch>
          <Route exact path='/' component={Homepage}>
            < Homepage />
          </Route>
          <Route  path='/body'  exact component={Body}>
            <Body />
          </Route>
              
<Route path='/todolist' exact component={TodoList}>
  <TodoList/>
</Route>
<Route  path='/map' exact component={Map}>
  <Map />
</Route>

<Route  path='/alarm' exact component={Alarm}>
  <Alarm />
</Route>
<Route  path='/vpn' exact component={VPN}>
<VPN />
</Route>
<Route path='/passwordmanager' exact component={PWM}>
  <PWM />
</Route>
<Route path='/stream' exact component={Stream}>
  <Stream />
</Route>
        </Switch>
      </Router>
    </div>
</div>

   
  )
}
export default App