import { UserOption } from "./UserOptions";

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

  return (
    <div>
      {todo?.map((data) => {
        return (
          <>
            <UserOption
              data={data}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              setEditTodo={setEditTodo}
              todo={todo}
            />
          </>
        );
      })}
    </div>
  );
};
export { DisplayTodo };
