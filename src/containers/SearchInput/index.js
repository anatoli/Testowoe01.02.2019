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
          <input placeholder='Why?' />
          <button>
            GO
          </button>
        </div>
      </div>
    );
  }
}

export default SearchInput;
