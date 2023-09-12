import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  // вызываем хук useRef и даем значение по умалчания null
  const myRef = useRef(null);
  // const [inputValue,setInputValue]= useState("")
  const previousRef = useRef(null);

  // в переменной ref есть ключ current с которым мы можем манипулистовать
  useEffect(() => {
    // во время рендера комппонента пусть будет фокус на тот элемент на который "повешен" ref
    myRef.current.focus()
    console.log(myRef);
  }, [])


  // const handleChange = (e)=>{
  //   setInputValue(e.target.value)
  // }

  // при клике показать значение которое хранится в рефе
  const handleClick = () => {
    console.log(previousRef.current.value);
  }

  console.log("Компонент отрендерился");

  return (
    <div className="App">
      {/* здесь "вешаем" на input ref  */}
      <input type='text' ref={myRef} />
      <br />
      <br />
      <br />
      {/* для того чотбы получить значение из инпута надо на него "навесить" ref */}
      <input type='text' ref={previousRef}/>
      <button onClick={handleClick}>Click</button>
      {/* <p>{inputValue}</p> */}
    </div>
  );
}

export default App;
