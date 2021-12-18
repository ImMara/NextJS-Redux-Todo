import React from 'react';

function TodoItem({todo , toggleTodo , deleteTodo}) {
    return (
        <li onClick={toggleTodo}>
            <span>{todo.name}</span>
            <span>
                <input type="checkbox" checked={todo.done}/>
                <button onClick={(e)=>{
                    e.stopPropagation();
                    deleteTodo();
                }}>Delete</button>
            </span>
        </li>
    );
}

export default TodoItem;