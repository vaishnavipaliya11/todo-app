import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { IoIosAdd } from "react-icons/io";
import "../index.css";
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

  const addToDo = (e, editTodo) => {
    e.preventDefault();
    console.log(editTodo, "edit todo");
    if (editTodo) {
      updateToDo(userInput, editTodo.id, editTodo.isComplete);
    } else {
      setTodo([...todo, { id: uuid(), title: userInput, isComplete: false }]);
      setUserInput("");
    }
  };

  return (
    <div>
      <form onSubmit={addToDo}>
        <input
          className="user-input"
          placeholder="enter to-do item"
          required
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
export { TodoListForm };
