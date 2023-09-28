import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EachUser from './components/EachUser/EachUser';
import { addUser } from './store/action/userAction'
import './App.css';
import AddUserForm from './components/AddUserForm';


function App() {
  const { users } = useSelector((state) => state);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dipspatch = useDispatch();


  const addUserToList = (user) => {
    dipspatch(addUser(user));
  };

  const openAddUserModal = () => {
    setModalIsOpen(true);
  };

  const closeAddUserModal = () =>{
    setModalIsOpen(false);
  };

  return (
    <div className="App">


      {modalIsOpen ? <AddUserForm addUserToList={addUserToList} closeAddUserModal={closeAddUserModal} /> : 
      <>   
        {users.map((eachUsers, idx) => {
          return <EachUser key={idx} {...eachUsers} />
        })}

        <button onClick={openAddUserModal}>Add User</button>
      </>
      }
    </div>
  );
}

// 1. Создать компонент для отабражения каждого пользователя
// 2. Доавить кнопку "+" для добавления пользователья в проект
// 3. "Прикрутить" функционал добавления пользователя

export default App;
