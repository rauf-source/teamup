import React from 'react';
// import firebase from './firebase';

class Using extends React.Component {
	constructor (){
		super();
	}
	render(){
		const db = firebase.firestore();

console.log(db.collection("users").get().then((snapshot)=>{
	snapshot.docs.map((n)=>console.log(n.data()))
}))
		return(<div>


			</div>
			)
	}
}
export default Using;