import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const {users} = useSelector((state) => state);

  return (
    <div className="App">
      {users.map((eachUsers,idx)=>{
        return <li key={idx}>{eachUsers.name}</li>
      })}
    </div>
  );
}

// 1. Создать компонент для отабражения каждого пользователя
// 2. Доавить кнопку "+" для добавления пользователья в проект
// 3. "Прикрутить" функционал добавления пользователя

export default App;
