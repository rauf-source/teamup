import React from 'react';
import Nav from './components/Nav/Nav.js';
import Body from './components/Body/Body.js';
import About from './components/Body/components/About/About.js';
import SignIn from './components/Body/components/SignIn/SignIn.js';
import SignUp from './components/Body/components/SignUp/SignUp.js';
import Home from './components/Body/components/Home/Home.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Footer from './components/Footer/Footer.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return(
     
      	<Router>
      	<div>
  		
		    <Switch>
		      		<Route path="/dashboard" component={Dashboard}/>
		     		<Route path='/about' component= {About}/>
		     		<Route path='/signin' component={SignIn}/>
		     		<Route path='/signup' component={SignUp}/>
		     		<Route path="/" component={Body}/>
		     </Switch>
		</div>
      	</Router>
      )
  }
}

export default App;
