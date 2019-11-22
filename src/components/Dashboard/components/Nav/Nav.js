import React from 'react';
import {Link} from 'react-router-dom';
import teamup from "../../images/team_up.png";
import '../../components/Nav/Nav.css'

class Nav extends React.Component{
	render(){
		return(
			<div>
		<nav>
			<div className="nav">
				<ul className="nav_custom li dashNav">
						<Link className="a" to="#"><li>Dashboard</li></Link>
						<img className="dashLogo" src={teamup} />
						<Link className="a" to="/about"><li>About</li></Link>
				</ul>
		
			</div>	
		</nav>
	</div>

			)
	}
}
export default Nav;