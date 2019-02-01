import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'
// import logo from './logo.svg';
import './App.css';
import routes from './routes';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ToastContainer/>
        {routes}
        <Footer/>
      </div>
    );
  }
}

export default App;
