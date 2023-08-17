// Пример классового компонента
// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { name: "Vazgen" }
//   }

//   componentDidMount() {
//     console.log('Компонент отрисовался на странице');
//   }

//   componentDidUpdate() {
//     console.log("Комонент обнавоился");
//   }



//   changeStateName = () => {
//     // при вызвое данного метда, у меня обнавотся компонент, так как я длеаю изменения в сотоянии
//     this.setState({ name: "Example" })
//   }

//   render() {
//     return (
//       <div onClick={this.changeStateName}>
//         Hello From Class Component {this.state.name}
//         {this.state.name === "Example" ? null : <ChildComponent text="Hello" />}
//       </div>)
//   }
// }


// class ChildComponent extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log("КОнструктор", props);
//   }

//   componentWillUnmount() {
//     // данной console.log() вызовится тогда когда компонента ChildComponent удалится из страницы.
//     // Это произайдет когда условие на строке 29 будет верным
//     console.log('Компонент удалился из страницы');
//   }

//   render() {
//     return <p>lorem</p>
//   }
// }

// export default App;



// Решение Алексея
// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // помещаем стейт нашего счетчика
//     this.state = {
//       counter: 0
//     };
//   }

//   // длеаем функцию увелечения счетчика
//   // берем наш стейт и прибавляем к ниму 1
//   incCounter = () => {
//     this.setState(prevState => ({
//       counter: prevState.counter + 1
//     }));
//   };

//   // делаем функцию уменьшение
//   // делаем стейт -1
//   decCounter = () => {
//     this.setState(prevState => ({
//       counter: prevState.counter - 1
//     }));
//   };

//   // рендерим компонент где отаброжаем кнопки и счетчик
//   render() {
//     return (
//       <div>
//         <button onClick={this.incCounter}>+</button>
//         <p>{this.state.counter}</p>
//         <button onClick={this.decCounter}>-</button>
//       </div>
//     );
//   }
// }

// export default Counter;


// Дмитрий
import React from 'react';

// создали класс и объявили в нем конструктор
class Counter extends React.Component {
  constructor(props) {
    super(props)
    // назначили начальное состояние 0
    this.state = { count: 0 }
    // для того чотбы передать методу контекст (методы, state,props и тд мы должны в конструкторе написать данную строчку)
    this.handleExampleFunction = this.handleExampleFunction.bind(this)
  }

  // метод который уверличивает значение счетчика на единицу
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // метод который уменьшает значение счетчика на единицу
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  handleExampleFunction(){
    // если 109 строку удалить то значние this будет undefined
    console.log(this);
  }

  // рендерим компонент который содержит 2 кнопки и поля для вывода значения для счетчика
  // на каждую кнопку при событии клик вешаем соответствующий метод
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <span onClick={this.handleExampleFunction}>{this.state.count}</span>
        <button onClick={this.decrement}>-</button>
      </div>)
  }

}

export default Counter;