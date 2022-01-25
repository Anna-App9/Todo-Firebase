import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddTask = () => {

    const [title, setTitle] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (title !== "") {
        await addDoc(collection(db, "todos"), {
          title,
          completed: false,
          inprogress : false,
        
        });
        setTitle("");
      }
    };
    return (
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            placeholder="Enter todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
</div>
        <div className="btn_container">
          <button>Add</button>
        </div>
      </form>
    );
  }
export default AddTask;
