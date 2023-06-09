
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
      <li className="list-group-item d-flex justify-content-between">
          <span 
            className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
            onClick={ () => onToggleTodo( todo.id ) }
          >
            { todo.description }
          </span>
          <button 
            className="btn btn-danger"
            onClick={ () => onDeleteTodo( todo.id ) }
          >Borrar</button>
      </li>
    )
  }


// export const TodoItem = (todos=[])=>{


//   return(
// <ul>
//  {
//   todos.map((todo)=>{
//   <li id={todo.id} className="list-group-item d-flex justify-content-between"> 
//   <span className={align-self-center}>item 1</span>
//   <button className="btn btn-danger">borrar</button>

//   </li>
 
//   })


//  }



// </ul>

//   )



// }