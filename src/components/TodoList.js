// import { ListItemSecondaryAction } from '@mui/material';
import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] =useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        // console.log(...todos);
    }

    const updateTodo = (todoId, newvalue) => {
        if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newvalue : item)))
    }

    const deleteTodo = (id) => {
       let del = todos.filter((item)=>{
         return item.id!==id
        })
        setTodos(del)
    }
    

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplets = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos);
    };

  return (
    <>
    <div className='things'>
      <h1>THINGS TO DO</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} 
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
      />

    </div>
    <div className="icon">
    <i className="fa-solid fa-solid fa-plus"></i>
    <i className="fa-solid fa-magnifying-glass"></i>
    <span> | item </span>
   <div className="to-blow">
   <button className='todo-blow'>All</button>
    <button className='todo-blow'>Active</button>
    <button className='todo-blow'>Completed</button>
    <button className='todo-blow'>Delete all</button>
   </div>
    </div>
    </>
  )
}

export default TodoList
