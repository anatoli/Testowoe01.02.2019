import React, { Component } from 'react';

import Checkbox from '../../components/Checkbox';
import CrossClose from '../../icon/CrossClose';

import './style.css';

class Widget extends Component {

  constructor (props) {
    super(props);
    this.array_default = Array.apply(null, {length: 300}).map(Number.call, Number);
    this.array = this.array_default;
    this.state = {
      isChecked: [{el: true, value: 1}, {el: true, value: 3}, {el: true, value: 17}  ],
      isSavedCheck: [{el: true, value: 1}, {el: true, value: 3}, {el: true, value: 17}  ],
      visible: false
    };
    this.arrayChecked = [{el: true, value: 1}, {el: true, value: 3}, {el: true, value: 17}  ] ;

  }

  filter = (startIndex) => {
    const obj = {0: 0, 1: 10, 2: 100, 3:200};
    this.find('', this.search.value);
    this.array = this.array_default.filter( el => el > obj[startIndex.target.selectedIndex]);
    this.setState({isChecked: this.arrayChecked});
  };

  find = (el='', value='') => {
    const str = (el.target && el.target.value) ? el.target.value : value;
    debugger;
    if(str !== '') {
      this.array = this.array_default.filter( el => !el.toString().includes(str));
      console.log(this.array);
      this.setState({isChecked: this.arrayChecked});
    } else {
      this.array = this.array_default;
    }
  };

  deleteItem = (index) => {
    console.log(this.arrayChecked);
      this.arrayChecked.splice(index, 1);
  };

  handleChange = (check, value, remove = false) => {
    if(!check || remove){
      const index = this.arrayChecked.findIndex((item) => item.value === value );
      this.deleteItem(index);
    } else if (this.arrayChecked.length < 3){
      this.arrayChecked.push({check, value:value});
    }
    this.setState({isChecked: this.arrayChecked});
  };

  checkInArray = (el) =>
     this.arrayChecked.findIndex((item) => { return item.value === el }) !== -1 ? true : false;

  Save = () => {
    this.setState({isSavedCheck: this.state.isChecked, visible: false})
  };

  Revert = () => {
    this.setState({isChecked: this.state.isSavedCheck, visible: false});
    this.arrayChecked = this.state.isSavedCheck;
  };

  Open = () => {
    this.setState({visible: true})
  };
  render() {
    const {isChecked, isSavedCheck, visible} =this.state;
    const strArray = ['элементов', 'элемент', 'элемента'];
    return (
      <div className='wrapper_box'>
        <div className='box'>
          <h1>Выбор элементов</h1>

          <p>{`На данный момент у вас выбрано`} <b>{isSavedCheck.length}</b> {strArray[isSavedCheck.length < 2 ? isSavedCheck.length : 2 ]} </p>

          <ul className='tags'>
            {
              isSavedCheck.map((el) =>
                <li key={el+2} className="tags--checked">
                  <p> Елемент {el.value}</p>
                </li>
              )
            }
          </ul>
          <div className={`button ${visible ? 'button__disabled' : ''}`}>
            <button onClick={this.Open} disabled={visible}>
              Изменить мой выбор
            </button>
          </div>
          { visible &&
            <div className='dialog'>
            <header>
              Диалог выбора элементов
            </header>
            <span>Поиск</span>
            <input onChange={this.find} ref={(node) => this.search = node }/>

            <span>Фильтр</span>
            <select onChange={this.filter}>
              <option value="300">Без фильтра</option>
              <option value="10">Номер > 10</option>
              <option value="100">Номер > 100</option>
              <option value="200">Номер > 200</option>
            </select>
            <div className="widget_wrapper">
              <ul>
              { this.array.map((el) =>
                <li key={`checkbox${el}`}>
                  <Checkbox
                    checked={this.checkInArray(el)}
                    id={el}
                    disabled={this.arrayChecked.length >= 3  && !this.checkInArray(el)}
                    name="sale_accept"
                    onChange={this.handleChange}
                    text={`Елемент ${el}`}
                    />
                </li>
                )
              }
              </ul>
            </div>

            <div>
              <p>Выбраные элементы на данный момент</p>
              <ul className='tags'>
                {
                  isChecked.map((el) =>
                    <li key={el+2} className="tags--checked">
                      <p> Елемент {el.value}</p>
                      <span onClick={()=> { this.handleChange(el.el, el.value, true)}}>
                            <CrossClose />
                          </span>
                    </li>
                  )
                }
              </ul>
            </div>

            <div className='button'>
              <button onClick={this.Save}>
                Сохранить
              </button>
              <button onClick={this.Revert}>
                Отмена
              </button>
            </div>
          </div>
          }

        </div>
      </div>
    );
  }
}

export default Widget;
