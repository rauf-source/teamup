import React from 'react';
import Nav from '../../../Nav/Nav.js'
import Footer from '../../../Footer/Footer.js'

// import Using from './Firestore/Using.js';
// import firestore from 'irestore.js'
class SignUp extends React.Component {
	constructor(){
		super();
		this.state = {
			input : '',

		}
	}
//name, email, password on if else
  
	render(){
		
		return(

			<div>
			<Nav />
				<form>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
          />
          <input
            type="email"
            name="email"
            placeholder="Full name"
          />
          <button type="submit">Submit</button>
        </form>
        <Footer />
			</div>
			)
	}
}
export default SignUp;