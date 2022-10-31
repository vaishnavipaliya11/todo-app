import { useState } from "react";
import "./App.css";
import { DisplayTodo } from "./components/displayTodo/DisplayTodo";
import { Header } from "./components/header/Header";
import { TodoListForm } from "./components/TodoListForm/TodoListForm";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null)
  console.log(todo);
  return (
    <div className="App">
      <Header />
      <TodoListForm
        todo={todo}
        setTodo={setTodo}
        userInput={userInput}
        setUserInput={setUserInput}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <DisplayTodo todo={todo} setTodo={setTodo}
      editTodo={editTodo}
       setEditTodo={setEditTodo}/>
    </div>
  );
}

export default App;
