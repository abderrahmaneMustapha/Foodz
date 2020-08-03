import React from 'react';
import logo from '../../assets/images/logo.svg';
import './home.css';
import NavBar from '../../components/navbar/index'
function Home() {
  return (
    <div className="App">
        <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
