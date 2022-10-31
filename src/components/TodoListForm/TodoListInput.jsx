const TodoListForm = ({ userInput, setUserInput, todo, setTodo }) => {
  const addToDo = () => {
    e.preventDefault();
   
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
