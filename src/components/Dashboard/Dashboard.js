import React from 'react';
import teamup from "./images/team_up.png";
import popper from "./images/popper.png";
import addImg from "./images/add.jpg"
import Nav from './components/Nav/Nav.js'
import './Dashboard.css';
import * as firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBB1sgXfNlcXNTJ7FMBNOFJ1HfrMfesXTw",
    authDomain: "team-up-186d1.firebaseapp.com",
    databaseURL: "https://team-up-186d1.firebaseio.com",
    projectId: "team-up-186d1",
    storageBucket: "team-up-186d1.appspot.com",
    messagingSenderId: "240374191839",
    appId: "1:240374191839:web:79e2f41de2f02498fe3b6a"
  };
  // Initialize Firebase


  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

class Dashboard extends React.Component{	
constructor(){
	super();
const arr =[];
db.collection("users").get().then(snapshot=>{
	snapshot.docs.map(n=>console.log(n.data()))
})
	this.state={
		users : arr,
	}
}
componentDidMount = ()=>{
console.log(this.state.users)
}

render(){

	return (
		<div>
		<Nav />
		<div>
			<h1 style={
				{
					display: "flex",
					justifyContent : "space-around",
					background: "white",
					verticalAlign: "center",
					margin: "auto auto 2vh auto",
					width: "100%",

				}
			}><img src={popper} />
			Thank You For Signing Up<img src={popper} /></h1>
		</div>
			<div className="othermembers">
				<img className="addImg"src={addImg} /><p>Other Members</p>
			</div>
			<div>
			{this.state.users.map((user, index)=>{
return 	<User key={index} user={user} />


		})}

			</div>	


		</div>
		)
}
}
 /*
make the Users component, the component should show username plus user email
pass the 
  */
const User =({user})=>{
	//props.email
	//props.name

	return(
		<div style={{margin:"20px 0"}}>
		<div className="user">
				<h1>UserName:{user.name}</h1>
			</div>
			<div className="user">
					<h1>Email: {user.email}</h1>
			</div>
			</div>
			)
}
export default Dashboard;

