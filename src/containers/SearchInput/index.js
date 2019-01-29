import React, { Component } from 'react';
import Header from '../../components/Header'
import './style.css';

class SearchInput extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='wrapper'>
          <input placeholder='Почему' />
          <button>
            НАЙТИ
          </button>
        </div>
        <div className='wrapper'>
          <input placeholder='Почему' />
          <button>
            1
          </button>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default SearchInput;
