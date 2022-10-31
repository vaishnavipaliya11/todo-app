const DisplayTodo = ({ todo, setTodo, setEditTodo }) => {
  const deleteTodo = ({id}) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const completeTodo =(data) =>{
      setTodo(
          todo.map((item)=>{
              if(item.id === data.id){
                  return {...item, isComplete:!item.isComplete}
              }
              return item
          })
      )
  }

  const editToDoHandler = ({id}) =>{
   const findToDo= todo.find((item) => item.id === id )
  setEditTodo(findToDo)
  }
  return (
    <div>
      {todo?.map((data) => {
        return (
          <>
            <li key={data.id}>
              <input
                type="text"
                onChange={(e) => e.preventDefault()}
                value={data?.title}
              />
              <button onClick={() => editToDoHandler(data)}>edit</button>
              <button onClick={() => completeTodo(data)}>complete</button>
              <button onClick={()=> deleteTodo(data)}>delete</button>
            </li>
          </>
        );
      })}
    </div>
  );
};
export { DisplayTodo };
