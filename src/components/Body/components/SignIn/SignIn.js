import React from 'react';
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
			<div>All about sign in BabySignIn
			<Link to="/dashboard">Dashboard</Link>
			
			</div>
			)
	}
}
export default SignIn;