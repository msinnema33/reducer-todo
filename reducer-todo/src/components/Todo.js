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

          <button className='add-btn'
            onClick={() => {
               dispatch({ type: 'ADD_TODO', payload: newItemText });
            }}
          >
            Update To Do list
          </button>

          <button className="clear-btn" 
            onClick={() => {
                 dispatch({type: 'CLEAR_COMPLETE'});
            }}
          >
        Remove Completed Items
      </button>  
      <div className="todo-list">
        <ul>
        {state.map(item => (
            <li className={state.completed ? 'completed' : ''} onClick={() => dispatch({type: 'TOGGLE_COMPLETE', payload: item.id})}
            >
                {item.item}
            </li>
        ))}
        </ul>    
      </div>
      </div>
    );
}

export default Todo;