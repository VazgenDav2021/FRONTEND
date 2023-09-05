import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import EachUser from './EachUser';
import { generAteTime } from './utils/timeStamp';

const users = [
  { name: "User 1", age: 25, city: "City 1" },
  { name: "User 2", age: 30, city: "City 2" },
  { name: "User 3", age: 28, city: "City 3" },
  { name: "User 4", age: 22, city: "City 4" },
  { name: "User 5", age: 35, city: "City 5" },
  { name: "User 6", age: 29, city: "City 6" },
  { name: "User 7", age: 32, city: "City 7" },
  { name: "User 8", age: 27, city: "City 8" },
  { name: "User 9", age: 26, city: "City 9" },
  { name: "User 10", age: 31, city: "City 10" }
];

function App() {
  const [counter, setCouner] = useState(0);

  const allINtervals = useMemo(() => {
    return generAteTime().filter(eachTime => {
      return new Date(eachTime).getHours() == "0"
    })
  }, [])

  console.log({ allINtervals });

  const incrmeent = () => setCouner(prevState => prevState + 1)


  // если в массиве зависомстей убрать значение "counter" и после изменения значения counter вызвать данную фунцкию то в консоль логе будет counter 0, 

  // если в массиве зависомстей будет counter то функция hello пересоздастся столько раз сколько раз поменяется значение useCallBack
  const hello = useCallback(() => {
    console.log("Hello", counter);
  }, [counter])


  const UserCachedComponent = useMemo(() => {
    return users.map((user, index) => {
      return <EachUser hello={hello} {...user} key={index} />
    });
  }, []);
  return (
    <>
      <div className="App">
        {UserCachedComponent}
      </div>
      <button onClick={incrmeent}>Click</button>
      <p>{counter}</p>
    </>
  );

}

// const EachUser = React.memo(({ name, age, city }) => {
//   console.log("Здесь вместо консоли могла быть тяжеланагруженная операция")
//   return <div className="eachUser" >
//     <li>{name}</li>
//     <li>{age}</li>
//     <li>{city}</li>
//   </div>
// })

export default App;
