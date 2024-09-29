import "./App.css";
import { useAppSelector } from "./store/hooks";
import { ITodo } from "./domains";
import { ItemList } from "./components/ItemList";
import { AddTodo } from "./components/AddTodo";
import { useState } from "react";
import { ActionBtn } from "./components/ActionBtn";

function App() {
  const [toggleForm, updateToggleForm] = useState(false);
  const todoList: ITodo | ITodo[] = useAppSelector((state) => state?.todo);

  const handleToggleForm = () => {
    updateToggleForm(!toggleForm);
  };

  return (
    <main className="main-wrapper">
      <header className="main-header">
        <h2>Todo List</h2>
      </header>
      <ActionBtn handleAction={handleToggleForm} />
      {toggleForm && <AddTodo toggleForm={handleToggleForm} />}
      {Array.isArray(todoList) &&
        todoList.map((todo: ITodo) => (
          <ItemList
            key={todo.todoId}
            todoId={todo.todoId}
            todoName={todo?.todoName}
            todoDescription={todo?.todoDescription}
          />
        ))}
    </main>
  );
}

export default App;
