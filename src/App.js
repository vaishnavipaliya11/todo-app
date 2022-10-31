import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { TodoListForm } from "./components/TodoListForm/TodoListInput";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <Header />
      <TodoListForm
        todo={todo}
        setTodo={setTodo}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </div>
  );
}

export default App;
