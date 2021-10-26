import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login'
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div>
                 <Router>
                 <ul>
                 <li><img  src="../ojas.png"  width="50px"  height="50px" alt="wait for image"></img></li>
  <li><Link to ={'/'} > Home</Link></li>
  <li><Link to ={'/Dashboard'} > Dashboard</Link></li>
  <li><Link to ={'/login'} style={{marginLeft:"800px"}}><button className="btn btn-success"> Login</button></Link></li>
  
</ul>
<Switch>
    {/* <Route path='/login'>
        <Login/>
    </Route>
 */} 
 <Route path="/Login" exact component={Login}></Route>

    {/* <Route path='/Dashboard'>
        <Dashboard/>
    </Route> */}
     <Route path="/Dashboard" exact component={Dashboard}></Route>



    <Route path='/'>
        
    </Route>
    
   

    </Switch>
</Router>
            </div>
        )
    }
}
