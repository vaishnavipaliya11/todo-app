import { useState } from "react";
import { AiFillEdit, AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import {
  IoCheckmarkDoneCircleOutline,
  IoCheckmarkDoneCircle,
} from "react-icons/io5";
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
          className="user-options-input"
        />
        <button onClick={() => editToDoHandler(data)} className="options-btn">
          {isEditable ? <AiFillEdit /> : <AiOutlineEdit />}
        </button>
        <button onClick={() => completeTodo(data)} className="options-btn" >
          {data.isComplete ? (
            <IoCheckmarkDoneCircle/>
          ) : (
            <IoCheckmarkDoneCircleOutline />
          )}
        </button>
        <button onClick={() => deleteTodo(data)} className="options-btn">
          <AiFillDelete />
        </button>
      </li>
    </>
  );
};

export { UserOption };
