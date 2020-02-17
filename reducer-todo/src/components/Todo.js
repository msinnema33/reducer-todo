// import React from 'react';

// const Todo = props => {
//   return (
//     <div
//       onClick={() => props.toggleItem(props.item.id)}
//       className={`item${props.item.completed ? ' completed' : ''}`}
//     >
//       <p>{props.item.name}</p>
//     </div>
//   );
// };

// export default Todo;

import React, { useState, useReducer } from 'react';
import { itemReducer, initialState } from '../reducers/ListReducer';

const Todo = () => {
    const [state, dispatch] = useReducer(itemReducer, initialState);
    const [newItemText, setNewItemText] = useState('');

    const handleChanges = e => {
        setNewItemText(e.target.value);
    };

    return (
        <div>
          <input
            className="title-input"
            type="text"
            name="newItemText"
            value={newItemText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
               dispatch({ type: 'ADD_TODO', payload: newItemText });
            }}
          >
            Update To Do list
          </button>
        </div>
    );
}

export default Todo;