import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
const DisplayTodo = ({ todo, setTodo, setEditTodo }) => {
  const deleteTodo = ({ id }) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const completeTodo = (data) => {
    setTodo(
      todo.map((item) => {
        if (item.id === data.id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      })
    );
  };

  const editToDoHandler = ({ id }) => {
    const findToDo = todo.find((item) => item.id === id);
    setEditTodo(findToDo);
  };
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
              <button onClick={() => editToDoHandler(data)}>
                <AiFillEdit />
              </button>
              <button onClick={() => completeTodo(data)}>
                <TiTick />
              </button>
              <button onClick={() => deleteTodo(data)}>
                <AiFillDelete />
              </button>
            </li>
          </>
        );
      })}
    </div>
  );
};
export { DisplayTodo };
