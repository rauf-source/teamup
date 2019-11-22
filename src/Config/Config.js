import firebase from 'firebase/app'
import 'firebase/firestore'
var config= {
    apiKey: "AIzaSyBB1sgXfNlcXNTJ7FMBNOFJ1HfrMfesXTw",
    authDomain: "team-up-186d1.firebaseapp.com",
    databaseURL: "https://team-up-186d1.firebaseio.com",
    projectId: "team-up-186d1",
    storageBucket: "team-up-186d1.appspot.com",
    messagingSenderId: "240374191839",
    appId: "1:240374191839:web:79e2f41de2f02498fe3b6a"
  };
  firebase.initializeApp(config);
firebase.firestore().settings({
	timestampsInSnapshots:true
});
export default firebase;