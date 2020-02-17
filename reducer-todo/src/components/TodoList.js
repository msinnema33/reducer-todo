import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  
  return (
    <div className="todo-list">
      {props.toDo.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Remove Completed Items
      </button>
    </div>
  );
};

export default TodoList;