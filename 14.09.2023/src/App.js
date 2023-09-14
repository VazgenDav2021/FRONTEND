import { useId, useState } from 'react';
import './App.css';

function App() {
  // здесь хранятся спсиски всех todo
  const [todos, setTodos] = useState([]);
  // здесь хранится значение кторое было введено в input
  const [inputValue, setInputValue] = useState("");

  // функция для добавления нового todo в список
  const addTodo = () => {
    // делаем проверку что инпут для создания тодо заполнен
    if (inputValue.trim() === '') return;
    // создаем новый тодо
    const newTodo = { id: new Date(), text: inputValue }
    // добавлем новый тодо в массив существуещих тодо
    setTodos(prevState => {
      return [
        ...prevState,
        newTodo
      ]
    });
    // очещаем поле инпута
    setInputValue("");
  }

  const removeTodoFromList = (id) => {
    // делаем фильтацию по массвиу и возращаем только те элементы у ктотых id не равен тому id который пришел в качестве параметра функции
    const updatedTodos = todos.filter(eachTodo => eachTodo.id !== id)
    // обнвабленный массив присваеваем к состоянию "tofos"
    setTodos(() => {
      return [
        ...updatedTodos
      ]
    })
  }

  return (
    <div className="App">
      <Input setInputValue={setInputValue} inputValue={inputValue} />
      <button onClick={addTodo}>Add new Todo</button>
      {/* сдлеать отрисовку todos */}
      {todos.map(({ text, id }) => {
        return <TodoItem key={id} text={text} id={id} removeTodoFromList={removeTodoFromList} />
      })}
    </div>
  );
}


function Input({ inputValue, setInputValue }) {
  const handleChangeINputValue = (e) => {
    setInputValue(e.target.value)
  }
  return <input type='text' value={inputValue} onChange={handleChangeINputValue} />
}


function TodoItem({ text, id, removeTodoFromList }) {
  const handleEdit = () =>{
    removeTodoFromList(id)
  }
  return(
  <li>
    <span>{text}</span>
    <button>Edit</button>
    <button onClick={handleEdit}>Delete</button>
  </li>
  )
}

export default App;


// 1. Создать компонент Todo (текст, кнопка для изменения текста, кнопка для удаления)
// 2. Создать функционал для удаления todo
