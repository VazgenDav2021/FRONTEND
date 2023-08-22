// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [click, setClick] = useState(false);

//   // функция которая написана в качестве колбэка будет вызызватся столько раз сколько раз будет изменятся значение click
//   useEffect(() => {
//     setCounter(prevState => prevState + 1)
//   }, [click]);


//   const changeClickValue = () => setClick((prevState) => !prevState)

//   return (
//     <div className="App">
//       counter:   {counter}
//       <button onClick={changeClickValue}>Click</button>
//     </div>
//   );
// }

// export default App;


// Алексей
// import { useEffect, useState } from "react";


// function EachUser({ user, handleUserClick }) {

//   const handleSelect = () => {
//     handleUserClick(user)
//   }

//   return <li key={user.id} onClick={handleSelect}>
//     {user.name}
//   </li>
// }

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   const getUsers = async () => {
//     await fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(prevData => [...prevData, ...data]);
//       })
//       .catch(error => {
//         console.error('Ошибка при загрузке пользователей:', error);
//       });
//   }

//   useEffect(() => {
//     getUsers()
//   }, []);

//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//   };

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map((user, index) => {
//           const key = `${index} - ${user.id}`
//           return (
//             <EachUser key={key} user={user} handleUserClick={handleUserClick} />
//           )
//         })}
//       </ul>
//       {selectedUser && (
//         <div>
//           <h2>Choised User:</h2>
//           <p>{selectedUser.name}</p>
//           <p>Email: {selectedUser.email}</p>
//           <p>Phone: {selectedUser.phone}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserList;



// Дмитрий
// import React, { useState, useEffect } from 'react';


// function EachUser({ id, name, username, email, handleSelectUser, selectedUserId }) {

//   // соаздаем функцию обертка для того чтобы в onlick не передовать callBack
//   const selectUser = () => {
//     handleSelectUser(id)
//   }

//   // если активный id равен итерируемому id пользователя то цвет красный ели нет то зеленый
//   // навешиваем обработчик события на каждого пользователя для изменения активного id
//   return <div key={id} style={{ backgroundColor: selectedUserId === id ? "red" : "green" }} onClick={selectUser}>
//     <h2><span>{id}.</span>{name}</h2>
//     <p>{username}</p>
//     <p>{email}</p>
//   </div>
// }

// function User() {

//   // создаем состояние для хранения массива пользователей
//   const [users, setUsers] = useState([]);
//   // создаем состояние для хранение id активного пользователя
//   const [selectedUserId, setSelectedUser] = useState(0);
  

//   // делаем асинхронный запрос на сервер для получения пильзователей и дальнейшее доабвление их в состояние
//   const getData = async () => {
//     await fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//         setUsers((() => [...data]));
//       })
//   }


//   // вызываем функцию запорса
//   useEffect(() => {
//     getData()
//   }, []);

//   // создаем функцию для изменения активного id пользоватля
//   const handleSelectUser = (index) => {
//     setSelectedUser(index);
//   };

//   // создаем react элемент из всех пользователей
//   const userCards = users.map((user, index) => {
//     // создаем ункикальный ключ для key
//     const key = `${index} - ${user.id}`
//     return <EachUser key={key} {...user} handleSelectUser={handleSelectUser} selectedUserId={selectedUserId} />
//   });


//   return (
//     <div>
//       <h1>User List</h1>
//       {userCards}
//     </div>
//   );

// }

// export default User;