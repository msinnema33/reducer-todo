import React from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <h1>Mike's Todo List!</h1>
        <Todo addNewItem={this.addNewItem} />
      </div>
      <TodoList className='listItems'
      toDo={this.state.toDoList}
      toggleItem={this.toggleItem}
      clearCompleted={this.clearCompleted}
      />
      </div>
  );
}

export default App;
