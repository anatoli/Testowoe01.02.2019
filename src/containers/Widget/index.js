import React, { Component } from 'react';

import Checkbox from '../../components/Checkbox';
import CrossClose from '../../icon/CrossClose';
import CloseModal from '../../icon/CloseModal';

import './style.css';

class Widget extends Component {

  constructor (props) {
    super(props);
    this.array = Array.apply(null, {length: 100}).map(Number.call, Number);
    this.arrayChecked = [];
    this.state = {
      isChecked: [{el: true, value: 1}, {el: true, value: 3}, {el: true, value: 17}  ]
    };
  }

  deleteItem = (index) => {
      this.arrayChecked.splice(index, 1);
  };

  handleChange = (check, value) => {
    if(!check){
      const index = this.arrayChecked.findIndex((item) => item.value === value );
      this.deleteItem(index);
    } else if (this.arrayChecked.length < 3){
      this.arrayChecked.push({check, value:value});
    }
    this.setState({isChecked: this.arrayChecked});
  };

  checkInArray = (el) => {
     return  this.arrayChecked.findIndex((item) => {
       console.log(item);
       return item.value === el
     }) !== -1 ? true : false;
  };


  render() {
    const {isChecked} =this.state;
    return (
      <div>
        {
          isChecked.length > 0 &&
            <div>
              <p>Сейчас Выбраны</p>
              <ul>
                {
                  isChecked.map((el) =>
                   <li key={el+2} className="isChecked">
                       <p> Елемент {el.value}</p>
                        <span>
                          <CrossClose />
                        </span>
                   </li>
                  )
                }
              </ul>
            </div>
        }
        <div className="widget_wrapper">
          <ul>
          { this.array.map((el) =>
            <li key={`checkbox${el}`}>
              <Checkbox
                checked={this.checkInArray(el)}
                id={el}
                name="sale_accept"
                onChange={this.handleChange}
                text={`Елемент ${el}`}
                />
            </li>
            )
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default Widget;
