import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';


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

console.log(db.collection("users").get().then((snapshot)=>{
	snapshot.docs.map((n)=>console.log(n.data()))
}))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
