import React from 'react';
import Body from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
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
