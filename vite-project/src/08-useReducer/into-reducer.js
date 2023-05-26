

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];




const todoReducer = ( state = initialState, action = {} ) => {
//crear un nuevo estado
    if ( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ];
    }
//nunca mutar un estado
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la priedra del poder',
    done: false
}


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}


todos = todoReducer( todos, addTodoAction );


console.log({state: todos})
