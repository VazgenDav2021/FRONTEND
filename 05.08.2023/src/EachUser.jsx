import React from 'react'

function EachUser({ name, age, city, hello }) {
    console.log("Здесь вместо консоли могла быть тяжеланагруженная операция")
    return <div className="eachUser" onClick={hello}>
        <li>{name}</li>
        <li>{age}</li>
        <li>{city}</li>
    </div>
}

export default React.memo(EachUser)