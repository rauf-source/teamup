import React from 'react';
import Footer from '../../../Footer/Footer.js'
import Nav from '../../../Nav/Nav.js'
class About extends React.Component {
	constructor(){
		super();
		this.state = {

		}
	}

	render(){
		return(
			<div>
			<Nav />
			About
			<Footer/>
			</div>
			)
	}
}
export default About;