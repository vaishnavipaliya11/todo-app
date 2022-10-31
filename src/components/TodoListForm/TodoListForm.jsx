import { useEffect } from "react";
import { v4 as uuid } from "uuid";

const TodoListForm = ({
  userInput,
  setUserInput,
  todo,
  setTodo,
  editTodo,
  setEditTodo,
}) => {
  useEffect(() => {
    if (editTodo) {
      setUserInput(editTodo.title);
    } else {
      setUserInput("");
    }
  }, [setUserInput, editTodo]);

  console.log(editTodo, "edit");
  const updateToDo = (title, id, isComplete) => {
    console.log(title, id, isComplete, "update func");
    const addNewTodo = todo.map((data) => {
      return data.id === id ? { title, id, isComplete } : todo;
    });
    setTodo(addNewTodo);
    setEditTodo("");
  };

  const addToDo = (e) => {
    e.preventDefault();
    console.log(editTodo, "edit todo");
    if (editTodo) {
      updateToDo(userInput, editTodo.title, editTodo.id, editTodo.isComplete);
    } else {
      setTodo([...todo, { id: uuid(), title: userInput, isComplete: false }]);
      setUserInput("");
    }
  };

  return (
    <div>
      <form onSubmit={addToDo}>
        <input
          placeholder="enter to-do item"
          required
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">{editTodo? "edit" :"ADD"}</button>
      </form>
    </div>
  );
};
export { TodoListForm };