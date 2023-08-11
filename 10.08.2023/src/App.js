import React, { useState } from 'react';

const App = () => {
    // храним состояния для поля имени
    const [name, setName] = useState('');
    // храним состояния для поля фамили
    const [title, setTitle] = useState('');
    // храним состояния для массива пользоватлей
    const [users, setUsers] = useState([]);

    // функция для добавления нового пользоватлея в массив
    const addUser = () => {
        // удет проверка если оба поля заполнены то только тогда пусть заработает код 15-18
        if (name && title) {
            // создаем новый объект пользователья
            const newUser = { name, title };
            // добавляем к текущему массиву пользователей новый объект пользоватля
            setUsers([...users, newUser]);
            // 2 строчки пишем для того, как мы добавили нового пользователя очистить инпуты
            setName('');
            setTitle('');
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Введите имя"
                    // прикерляем к инпуту значение которое хранится в переменной name
                    value={name}
                    // навешиваем обработчик события на инпут и передаем функции setName те значения которые былии введены в инпут
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Введите название"
                    // прикерляем к инпуту значение которое хранится в переменной title
                    value={title}
                    // навешиваем обработчик события на инпут и передаем функции setName те значения которые былии введены в инпут
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* Навешиваем на кнопку функцию addUser, при клике пусть она сработает для добавления пользователья */}
                <button onClick={addUser}>Добавить</button>
            </div>
            <div>
                <h2>Список пользователей:</h2>
                <ul>
                {/* здесь уже пробигаемся по массива пользоватлей и их отабращам в элементе li */}
                    {users.map((user, index) => (
                        <li key={index}>
                            {user.name} - {user.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;