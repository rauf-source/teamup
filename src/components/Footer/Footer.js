import React from 'react';


import './Footer.css'
class Footer extends React.Component {
	constructor(){
		super();

	}
	render(){
		return(
<div>
	<footer>
		<div className= "container">
			
			<div>
			<h1>Follow us on social Media</h1>
			<ul class="links">
				<li><a href="#"><span className="fa fa-facebook-f" name="rocket"></span>FaceBook</a></li>
				<li><a href="#"><span className="fa fa-twitter" name="rocket"></span>Twitter</a></li>
				<li><a href="#"><span className="fa fa-youtube" name="rocket"></span>YouTube</a></li>
				<li><a href="#"><span className="fa fa-github" name="rocket"></span>Github</a></li>
			</ul>
			</div>
			<div>
				<ul style={{fontSize: "20px", alignItems:"center", listStyle: "none"}}>
				<li>All rights reserved &copy; Technocrats</li>
				</ul>
			</div>	
		</div>
	</footer>
</div>

			)
	}
}
export default Footer;


