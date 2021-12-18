import React from 'react';
import TodoItem from "./TodoItem";
import { connect } from 'react-redux';
import {deleteTodo, toggleTodo, VisibilityFilters} from "../store/actions";

function TodoList(props) {
    return (
        <ul>
            {
                props.todos && props.todos.map( (t,i) => (
                    <TodoItem
                        key={t.name}
                        todo={t}
                        deleteTodo={ ()=>deleteTodo(i) }
                        toggleTodo={ ()=>toggleTodo(i) }
                    />
                ))
            }
        </ul>
    );
}

export default connect(state => {
    const filter = state.filter;
    let todos;
    switch(filter) {
        case VisibilityFilters.SHOW_DONE: {
            todos = state.todos.filter( t => t.done )
            break;
        }
        case VisibilityFilters.SHOW_ACTIVE: {
            todos = state.todos.filter( t => !t.done )
            break;
        }
        default: {
            todos = state.todos
            break;
        }
    }
    return {todos};
},{toggleTodo,deleteTodo})(TodoList);