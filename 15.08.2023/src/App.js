// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   // создаем состояние для хранения пользователей, с перва пустой массив
//   const [users, setUsers] = useState([]);


//   const makeEmptyUsers = () => {
//     setUsers([])
//   }

//   // создаюм функцию для получения пользователей и добавление их к нашему состоянию
//   const getUsers = async () => {
//     // делаем запорс
//     return await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
//       // транформируем нашу дату которая пришла
//       return res.json()
//     }).then(data => {
//       // получив нужную дату вызываем set фунцкю
//       // set фунцкция принимает в качестве парамется callback функцию, данная функция как параметр принимает
//       // предыдущее состояние
//       setUsers((preState) => {
//         // мы берем предыдущее состояние и дату которая к нам пришла и возращаем новый объект комбинируя 2 этих значения
//         return [...preState, ...data]
//       })
//     })
//   }

//   // если в массиве зависимостей не укажем не одной переменной то useEffect вызывится 1 раз
//   // если в массиве зависимостей укажем переменную то useEffect вызывится столько раз сколько раз поменялось значение нашей переменной
//   // если удалим массив зависимостей то useEffect вызывится бесконечное количество
//   useEffect(() => {
//     getUsers()
//   }, []);

//   return (
//     <div className="App">
//       {users.map((eachuser, index) => {
//         const { name } = eachuser
//         return <li key={index}>{name}</li>
//       })}
//       <ChildComponent makeEmptyUsers={makeEmptyUsers} />
//     </div>
//   );
// }

// const ChildComponent = ({ makeEmptyUsers }) =>{
//   return <button onClick={makeEmptyUsers}>Click</button>
// }

// export default App;


// Дмитрий
// import { useState } from "react";

// export default function Myapp() {
//   // состяние для хранения задего фона
//   const [currentColor, setCurrentColor] = useState('green');

//   const handleColorChange = () => {
//     // не стоило использовать DOM так как это является тяжелой операцией
//     // лучше было написать в useState
//     // взял зчание из инппута используя DOM селектор
//     const newColor = document.getElementById('colorInput').value;
//     // изменил состяние на newColor
//     setCurrentColor(newColor);
//   };

//   return (
//     <div>
//       <input type="text" id="colorInput" placeholder="Введите цвет" />
//       <button onClick={handleColorChange}>Изменить цвет</button>
//       <div style={{ width: '200px', height: '200px', backgroundColor: currentColor }}></div>
//     </div>
//   );
// }
// import { useState } from 'react';
// export default function Myapp() {

//   const [currentColor, setCurrentColor] = useState('green');
//   const [divColor, setDivColor] = useState("")

//   const handleChange = (event) => {
//     setDivColor(event.target.value)
//   }

//   const handleColorChange = () => {
//     setCurrentColor(divColor);
//   };

//   const handleEnter = () => {
//     setCurrentColor(divColor)
//   }

//   const handleLeave = () => {
//     setCurrentColor("green")
//   }

//   return (
//     <div>
//       <input type="text" placeholder="Введите цвет" onChange={handleChange} />
//       <button onMouseEnter={handleEnter} onClick={handleColorChange}>Изменить цвет</button>
//       <div onMouseLeave={handleLeave}
//         style={{ width: '200px', height: '200px', backgroundColor: currentColor }}></div>
//     </div>
//   );
// }

// Yury
import React from 'react';
import ColorChanger from './ColorChanger';


function App() {
  return (
    <div className="App">
      <h1>Color Changer App</h1>
      <ColorChanger />
    </div>
  );
}

export default App;
