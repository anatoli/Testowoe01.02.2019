import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.svg';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <nav>
            <Link to="/">Search</Link>
            <Link to="/widget/">Widget</Link>
            <Link to="/about/">About</Link>
          </nav>


        </header>
      </div>
    );
  }
}

export default Header;
