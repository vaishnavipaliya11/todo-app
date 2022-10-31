import {v4 as uuid} from "uuid"
import { DisplayTodo } from "../displayTodo/DisplayTodo";

const TodoListForm = ({ userInput, setUserInput, todo, setTodo }) => {
  const addToDo = (e) => {
    e.preventDefault();
   setTodo([...todo, {id:uuid(), title:userInput, isComplete:false}])
   setUserInput("")
  };
  return (
    <div>
      <form>
        <input
          placeholder="enter to-do item"
          required
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit" onClick={(e) => addToDo(e)}>
          Add
        </button>


      </form>
     
    </div>
  );
};
export { TodoListForm };
