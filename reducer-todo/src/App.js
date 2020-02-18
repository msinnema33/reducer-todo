import Todo from './components/Todo';
// import TodoList from './components/TodoList';
import './App.css';

import React, { useState, useReducer } from 'react';
import { itemReducer, initialState } from './reducers/ListReducer';


function App() {
  const [state, dispatch] = useReducer(itemReducer, initialState);
    const [newItemText, setNewItemText] = useState('');

    // const handleChanges = e => {
    //     setNewItemText(e.target.value);
    // };

    const handleClick = e => {
      e.preventDefault();
       dispatch({type: 'TOGGLE_COMPLETE', payload: state.id});
    }
  return (
    <div className='container'>
      <div className='header'>
        <h1>Mike's Todo List!</h1>
        <Todo />
      </div>
      
      </div>
  );
}

export default App;
