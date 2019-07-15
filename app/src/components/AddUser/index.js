import React, {useState} from 'react';

import './styles.css';

const AddUser = ({addUser, onSubmit}) => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value)
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    addUser({name});
    setName('');
    onSubmit()
  };

  return (
      <form onSubmit={handleSubmit}
            className="modal-form">
        <input type="text"
               className="input-name"
               placeholder="Имя"
               value={name}
               onChange={handleInputChange}
               required/>
        <button
            className="btn-modal-submit"
            type="submit">
          Добавить
        </button>
      </form>
  )
};

export default AddUser;