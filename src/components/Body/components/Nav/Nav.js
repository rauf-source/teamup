import React from 'react';
import About from './components/About/About.js';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';
import Home from './components/Home/Home.js';
import './Body.css'
class Body extends React.Component {
	constructor(){
		super();
		this.state = {
		input : null,
		component : "Home",
		}
	}
	handleInput =(event)=>{
		this.setState({
			input: event.target.value
		})
		console.log(this.state.input)
	}
	handleClick =()=>{
		this.setState({
		component : this.state.input
		});
		console.log(this.state.component)
	}
	handleAnchorClick =(event)=>{
		this.setState({
			component: event.target.getAttribute("value"),
		})
		console.log(this.state.component)
	}

	render(){
		return(
	<div>
		<nav>
			<ul className="nav_custom li">
					<li><a className="a" href="#" value="Home" onClick={this.handleAnchorClick}>Home</a></li>
					<li><a className="a" href="#" value="SignIn" onClick={this.handleAnchorClick}>Sign In</a></li>
					<li><a className="a" href="#" value="SignUp" onClick={this.handleAnchorClick}>Sign Up</a></li>
					<li><a className="a" href="#" value="About" onClick={this.handleAnchorClick}>About</a></li>
			</ul>
		</nav>
			<BodyComponents selector={this.state.component}/>

	</div>
			)
	}
}
const BodyComponents =({selector})=>{
	if(selector === "Home"){
		return <Home />;
	}
	else if(selector === "SignIn"){
		return <SignIn />;
	}
	else if(selector  ===  "SignUp"){
		return <SignUp />
	}
	else if(selector === "About"){
		return <About />
	}
	else {
		return null;
	}
}
export default Body;