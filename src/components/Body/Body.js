import React from 'react';
import About from './components/About/About.js';
import Nav from '../../components/Nav/Nav.js';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';
import Home from './components/Home/Home.js';
import Footer from '../Footer/Footer.js'
import {Link} from 'react-router-dom';
import './Body.css'
class Body extends React.Component {
	constructor(){
		super();
	}
	render(){
		return(
	<div>
		<Home />
		<Footer />
	</div>
			)
	}
}
export default Body;