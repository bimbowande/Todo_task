import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppSelector } from "./store/hooks";
import { ITodo } from "./domains";

function App() {
  const [count, setCount] = useState(0);

  const todoList: ITodo | ITodo[] = useAppSelector((state) => state?.todo);
  console.log(todoList);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h4>test test</h4>
        {Array.isArray(todoList) &&
          todoList.map((todo: ITodo) => (
            <ul key={todo.todoId}>
              <li>{todo?.todoId}</li>
              <li>{todo?.todoName}</li>
              <li>{todo?.todoDescription}</li>
            </ul>
          ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
