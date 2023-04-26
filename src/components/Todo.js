import React, {useState}  from 'react'
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri';



function Todo({todos, completeTodo, deleteTodo,  updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return<TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    
  return todos.map((todo, index) => (
    <div 
    className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    key={index}
    > 
     <div key={todo.id} onclick={() => completeTodo(todo.id)}>
        {todo.text}
     </div>


        <div className="icons">  

            <i className="delete-icon fa-regular fa-circle-xmark" onClick={() => deleteTodo(todo.id)}/>

            <i onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon fa-regular fa-pen-to-square"/>
        </div>
    </div>
  ))
}

export default Todo
