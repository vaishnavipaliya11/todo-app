import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
const UserOption = ({
  data,
  deleteTodo,
  completeTodo,
  todo,
  setEditTodo,
  setTodo,
}) => {
  const [editInput, setEditInput] = useState(data?.title);
  const [isEditable, setIsEditable] = useState(false);
  const editInputHandler = (event) => {
    event.preventDefault();
    setEditInput(event.target.value);
  };
  const editToDoHandler = () =>
    isEditable ? updateToDo() : setIsEditable(true);

  const updateToDo = () => {
    setIsEditable(false);
    setTodo((todo) =>
      todo.map((item) => {
        if (item.id === data.id) {
          return { ...item, title: editInput };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <>
      <li key={data.id}>
        <input
          type="text"
          onChange={(e) => editInputHandler(e)}
          value={editInput}
          disabled={!isEditable}
        />
        <button onClick={() => editToDoHandler(data)}>
          {/* <AiFillEdit /> */}
          {isEditable ? "edit" : "start editing"}
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
};

export { UserOption };
