export const ADD_TODO = 'add todo';
export const DELETE_TODO = 'delete todo';
export const SET_FILTER = 'set filter';
export const TOGGLE_TODO = 'toggle todo';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = todo => {
    return{
        type: ADD_TODO,
        todo
    }
}

// function that returns action const and index given.
export const deleteTodo = index => {
    return {
        // type defines action const
        type: DELETE_TODO,
        // element passed in this function
        index
    }
}

export const setFilter = filter => {
    return {
        type: SET_FILTER,
        filter
    }
}

export const toggledTodo = index =>{
    return {
        type: TOGGLE_TODO,
        index
    }
}