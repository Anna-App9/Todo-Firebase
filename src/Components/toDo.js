import React, { useState } from 'react';
import  CheckCircleIcon  from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import  EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Todo({ todo, toggleComplete, toggleInprogress, handleDelete, handleEdit,}) {

const [newTitle, setNewTitle] = useState(todo.title);



const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    }
    else if(todo.inprogress === true)
    {
    setNewTitle(todo.title);
    
    }

     else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{backgroundColor : todo.inprogress?'rgb(74, 130, 139)' : todo.completed?'green' : todo && 'yellow'}}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-inprogress"
          onClick={() => toggleInprogress(todo)}
        >
          <SpeedIcon id="i" />
        </button>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}

