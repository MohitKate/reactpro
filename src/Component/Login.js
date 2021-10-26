import React, { Component } from 'react'

import { Link} from 'react-router-dom'



export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             pass:''

        }
    this.nav =this.nav.bind(this)

    }

   nav(){
       this.props.history.push(`/Dashboard`)
   }
    
    render() {
        return (   
            <div  class="card">
                         
                <form> 
                    <h2>Login Form</h2>
                  <input type="text"  placeholder="UserName" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} className="container-fluid"></input><br></br><br></br>
                   <input type="text"   placeholder="Password" value={this.state.pass} onChange={(event) => this.setState({ pass: event.target.value })}  className="container-fluid"></input><br></br><br></br>

                    <Link to ={'/login'} > Forget Password</Link> <br></br><br></br>
             
                 {/* <button onClick={() => this.login()}     >Submit</button>

                      */}
                      </form>
                       {/* <Router> */}
                     <button  className="btn btn-success"  onClick={this.nav}>LogIN</button>
                 
                     
                 {/* <Switch>
                     <Route  path='./Dashboard'>
                      <Dashboard/>
                     </Route>
                 </Switch>

                 </Router> */}
             


             
            </div>
        )
    }
}
