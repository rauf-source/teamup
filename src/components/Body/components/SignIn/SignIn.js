import React from 'react';
import Nav from '../../../Nav/Nav.js'
import Footer from '../../../Footer/Footer.js'
import {Link} from 'react-router-dom';
class SignIn extends React.Component {
	constructor(){
		super();
		this.state = {
			switch :false
		}
	}
handleSubmit=()=>{
	this.setState({
		switch:true
	})
}
	render(){
		return(
			<div>
			<Nav />
			<Link to="/dashboard">Dashboard</Link>
			<Footer />
			</div>
			)
	}
}
export default SignIn;