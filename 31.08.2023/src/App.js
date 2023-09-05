// Example 1
// import { createContext, useContext, useState } from 'react';
// import './App.css';

// const Counter = createContext()


// function App() {
//   const [counter, setCounter] = useState(0);
//   return <Counter.Provider value={{ counter, setCounter }}>
//     <A />
//     <B />
//   </Counter.Provider>
// }


// function A() {
//   const { counter } = useContext(Counter)
//   return <div>{counter}</div>
// }

// function B() {
//   const { setCounter: handleChangeCounterValue } = useContext(Counter)

//   const decrement = () => {
//     handleChangeCounterValue(prevState => {
//       if (prevState <= 1) {
//         return 0
//       } else {
//         return prevState - 1
//       }
//     })
//   }

//   const increment = () => {
//     handleChangeCounterValue(prevState => prevState + 1)
//   }

//   return <>
//     <button onClick={decrement}>-</button>
//     <button onClick={increment}>+</button>
//   </>
// }

// export default App;


// Example 2

import { useState, createContext, useContext } from 'react';
const ComponentContext = createContext()

export default function App() {
  return <ComponentContext.Provider value={"Hello World"}>
    <Componen1 />
  </ComponentContext.Provider>
}

function Componen1() {
  return <div style={{ padding: "10px", background: "red" }}>
    Я компонент со вложенностю 1. И мне не нужно состояние из контекста
    <Component2 />
  </div>
}

function Component2() {
  return <div style={{ padding: "10px", background: "blue" }}>
    Я компонент со вложенностю 1. И мне не нужно состояние из контекста
    <Component3 />
  </div>
}

function Component3() {
  const value = useContext(ComponentContext)
  return <div style={{ padding: "10px", background: "yellow", }}>
    <p> Я самый последний компонент и я покажу что у нас хранится в контексте</p>
    {value}
  </div>
}