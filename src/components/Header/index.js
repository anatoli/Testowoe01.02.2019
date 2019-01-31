import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.svg';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <a href='https://www.linkedin.com/in/anatolii-arinovich-b3179bb9/'>Анатолий Аринович</a>
          </h1>
            <nav className="nav">
                <ul>
                    <li className="current"><Link to="/">Search</Link></li>
                    <li><Link to="/widget/">Widget</Link></li>
                    <li><Link to="/article/">Article</Link></li>
                    <li><Link to="/about/">About</Link></li>
                </ul>
            </nav>
        </header>
      </div>
    );
  }
}

export default Header;
