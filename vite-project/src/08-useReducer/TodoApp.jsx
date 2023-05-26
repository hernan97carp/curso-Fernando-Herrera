import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './Todolist';


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
    
    return (
        <>
            <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo={ handleNewTodo }  
                    />
                </div>

            </div>


        
        </>
    )
}


// import { useReducer } from "react"
// import { todoReducer } from "./todoReducer"
// const initialState= [
// {
// id: new Date().getTime(),
// description: "recolectar agua",
// done:false,

// },

// {
//     id: new Date().getTime() * 3,
//     description: "recolectar piedra",
//     done:false,

// }

// ]
// console.log(initialState)
// export const TodoApp = () =>{
// //todo reducer no lo ejecutamos  ...para q use reducer lo use cuando lo indique el
//  //en vez de state le podemos decir q es un todo
//  // en vez de dispatch llamar dispatchTodo
// const [todo ,dispatch] = useReducer(todoReducer, initialState)


//     return(
//         <>
       
//             <h1>Todo app</h1>
//               <ul>
//             <li>item 1</li>
//             <li>item 2</li>
//             <li>item 3</li>
//             </ul>
//         </>
//     )
// }