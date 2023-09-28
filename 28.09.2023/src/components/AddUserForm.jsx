import React, { useState } from 'react'

const AddUserForm = ({ closeAddUserModal, addUserToList }) => {
    const [newUserInfo, setNewUserInfo] = useState({ name: "", sname: "", age: "" });

    const handleChangeInputValue = (e, inputName) => {
        const inputValue = e.target.value

        setNewUserInfo((prevState) => {
            return {
                ...prevState,
                [inputName]: inputValue
            }
        })
    }

    const createUser = (e) => {
        e.preventDefault();
        addUserToList(newUserInfo);
        closeAddUserModal();
    }

    return (
        <form>
            <label>Name:
                <input value={newUserInfo.name} onChange={(e) => handleChangeInputValue(e, 'name')} type='text' placeholder='name' />
            </label>

            <label>Surname:
                <input value={newUserInfo.sname} onChange={(e) => handleChangeInputValue(e, 'sname')} type='text' placeholder='Surname' />
            </label>

            <label>age:
                <input value={newUserInfo.age} onChange={(e) => handleChangeInputValue(e, 'age')} type='text' placeholder='age' />
            </label>
            <button type='submit' onClick={createUser}>Create User</button>
            <button onClick={closeAddUserModal}>Close Modal</button>
        </form>
    )
}

export default AddUserForm