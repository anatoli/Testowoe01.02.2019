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
            <ul>
              <li>
                <Link to="/">Search</Link>
              </li>
              <li>
                <Link to="/widget/">Widget</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>


        </header>
      </div>
    );
  }
}

export default Header;
