import React from 'react';
import Body from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js';
// import firebase from 'firebase/app'
// import firestore from 'firebase/firestore';
import * as firebase from 'firebase';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	constructor(){
		super();
	}
componentDidMount(){
	const x =  firebase.firestore();
	x.settings({timestampsInSnapshots:true});
	x.collection("users").get().then(snapshot=>{
		snapshot.docs.map(n=>{
			console.log(n.data())
		})
	})
}
  render(){

    return(
      <div>
      <Body />
      <Footer />
      </div>
      )
  }
}

export default App;
