import { useState } from "react";
import "./App.css";
import { DisplayTodo, Header, TodoListForm } from "../src/components/index.";
import "./styles.css"
function App() {
  const [userInput, setUserInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="App">
      <div className="todo-list-container">
        <Header />
        <div>
        <TodoListForm
          todo={todo}
          setTodo={setTodo}
          userInput={userInput}
          setUserInput={setUserInput}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <DisplayTodo
          todo={todo}
          setTodo={setTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        </div>
      
      </div>
    </div>
  );
}

export default App;
