const DisplayTodo = ({ todo, setTodo }) => {
  const deleteTodo = (data) => {
    // console.log(data);
    // console.log(todo.filter((item) => item.id !== data.id));
    // setTodo(todo.filter((item) => item.id !== data.id));
  };
  // const completeTodo =(todo) =>{
  //     setTodo(
  //         todo.map((item)=>{
  //             if(item.id === todo.id){
  //                 return {...item, isComplete:!item.isComplete}
  //             }
  //             return item
  //         })
  //     )
  // }
  return (
    <div>
      {todo?.map((data) => {
        return (
          <>
            <li key={data.id}>
              <input onChange={(e) => e.preventDefault()} value={data?.title} />
            </li>

            <button>edit</button>
            {/* <button onClick={completeTodo(todo)}>complete</button> */}
            <button onClick={deleteTodo(data)}>delete</button>
          </>
        );
      })}
    </div>
  );
};
export { DisplayTodo };
