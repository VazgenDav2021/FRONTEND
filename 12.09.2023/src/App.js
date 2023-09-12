import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './pages/Home/Home';

function App() {
  // // вызываем хук useRef и даем значение по умалчания null
  // const myRef = useRef(null);
  // // const [inputValue,setInputValue]= useState("")
  // const previousRef = useRef(null);

  // // в переменной ref есть ключ current с которым мы можем манипулистовать
  // useEffect(() => {
  //   // во время рендера комппонента пусть будет фокус на тот элемент на который "повешен" ref
  //   myRef.current.focus()
  //   console.log(myRef);
  // }, [])


  // // const handleChange = (e)=>{
  // //   setInputValue(e.target.value)
  // // }

  // // при клике показать значение которое хранится в рефе
  // const handleClick = () => {
  //   console.log(previousRef.current.value);
  // }

  // console.log("Компонент отрендерился");

  return (
    // <div className="App">
    //   {/* здесь "вешаем" на input ref  */}
    //   <input type='text' ref={myRef} />
    //   <br />
    //   <br />
    //   <br />
    //   {/* для того чотбы получить значение из инпута надо на него "навесить" ref */}
    //   <input type='text' ref={previousRef}/>
    //   <button onClick={handleClick}>Click</button>
    //   {/* <p>{inputValue}</p> */}
    // </div>
    <>
      <nav>
        <ul>
          <li>
          {/* создаем ссылки для переадресации пользователя, (вместо а используем Link, вемсто href используем to) */}
            <Link to='/' >
              Home
            </Link>
          </li>
          <li>
            <Link to='/contact' >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* здесь указавыем какие страницы могут быть в нашем приложении */}
      <Routes>
        <Route path='/' Component={HomeComponent} />
        <Route path='/contact' Component={ContactComponent} />
      </Routes>
    </>
  );
}

function ContactComponent() {
  return <div style={{ width: "100%", height: "100vh", background: "blue" }}>
    ContactComponent
  </div>
}

export default App;



// на основе нового проекта создать навигацию с оснавной страницей, страницей контаков, он нас, обратная связь
// при клике на ссылку переадресовывать клинета на конкретную страницу
// Создать директорию pages и внем хранить все компонеты страницы