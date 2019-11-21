import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
	render(){
		return(
			<div>
		<nav>
			<ul className="nav_custom li">
					<Link className="a" to="/"><li>Home</li></Link>
					<Link  className="a"to="/signin"><li>Sign In</li></Link>
					<Link className="a" to="/signup"><li>Sign Up</li></Link>
					<Link className="a" to="/about"><li>About</li></Link>
			</ul>
		</nav>
	</div>

			)
	}
}
export default Nav;