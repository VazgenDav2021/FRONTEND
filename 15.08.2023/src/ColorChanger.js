// // Yury
// import React, { useState } from 'react';

// function ColorChanger() {
//     // создал состояние для хранения значения инпута
//     const [inputValue, setInputValue] = useState('');
//     // создал состояние для хранения значения backgroundColor
//     const [divColor, setDivColor] = useState('green');


//     // создал функцию для изменения состояния inputa
//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };

//     // создал функцию для изменения состояния backgroundColor
//     const handleButtonClick = () => {
//         setDivColor(inputValue);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 // задал состояния 
//                 value={inputValue}
//                 // задал функцию которая должна работать при вводе символов
//                 onChange={handleInputChange}
//                 placeholder="Enter color"
//             />
//             {/* повесил обработчик события клика и при каждом клике должна срабатывать функция handleButtonClick */}
//             <button onClick={handleButtonClick}>Change Color</button>
//             <div
//                 style={{
//                     // динамично берет значение divColor и присаветв это как значение для backgroundColor
//                     backgroundColor: divColor,
//                     width: '100px',
//                     height: '100px',
//                     marginTop: '20px'
//                 }}
//             ></div>
//         </div>
//     );
// }

// export default ColorChanger;


import React, { useState } from 'react';

function ColorChanger() {
    const [inputValue, setInputValue] = useState('');
    const [divColor, setDivColor] = useState('green');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleMouseEnter = () => {
        setDivColor(inputValue);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter color"
            />
            <button onMouseEnter={handleMouseEnter}>Change Color</button>
            <div
                style={{
                    backgroundColor: divColor,
                    width: '100px',
                    height: '100px',
                    marginTop: '20px'
                }}
            ></div>
        </div>
    );
}

export default ColorChanger;