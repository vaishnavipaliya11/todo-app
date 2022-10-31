import { useState } from "react";
import "./App.css";
import { DisplayTodo } from "./components/displayTodo/DisplayTodo";
import { Header } from "./components/header/Header";
import { TodoListForm } from "./components/TodoListForm/TodoListInput";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todo, setTodo] = useState([]);
  console.log(todo);
  return (
    <div className="App">
      <Header />
      <TodoListForm
        todo={todo}
        setTodo={setTodo}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <DisplayTodo todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
