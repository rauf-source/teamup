import React from 'react';
import team1 from './images/team1.jpg';
import teamup from './images/team_up.png'
import './Home.css'
class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			team1Hover: false
		}
	}
	handleMouseEnter= ()=>{
		this.setState({
			team1Hover:true
		})
	}
	handleMouseLeave= ()=>{
		this.setState({
			team1Hover: false
		})
	}
	handleClick= ()=>{
		this.setState({

		})
	}

	render(){
		return(
			<div className="home">	
				<img class="logo" src={teamup} />
				<div className="welcome">
					<h1>Welcome to Team Up</h1>
					<div onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}>
						<img src={team1} style={{
							width: "100%",
							height: "auto",
							zIndex:2,
							opacity: 1,
							marginBottom:"5vw"
						}} className={"team1"}/>
					</div>
				</div>
				<div class="getstarted">
				
				</div>
			</div>
			)
	}
}
export default Home;