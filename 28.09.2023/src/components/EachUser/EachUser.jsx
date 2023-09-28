import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/action/userAction'

const EachUser = ({ name, id }) => {

    const dispatch = useDispatch();

    const deleteUserFromList = () => {

        dispatch(removeUser(id))

    };

    return (
        <div>
            <span>{name}</span>
            <button onClick={deleteUserFromList}>Delete user</button>
        </div>
    )
}

export default EachUser