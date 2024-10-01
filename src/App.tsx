import "./App.css";
import { useAppSelector } from "./store/hooks";
import { ITodo } from "./domains";
import { ItemList } from "./components/ItemList/ItemList";
import { AddTodo } from "./components/AddTodo";
import { useState } from "react";
import { ActionBtn } from "./components/ActionBtn";
import { useAppDispatch } from "./store/hooks";
import { removeTodo } from "./store";

function App() {
  const dispatch = useAppDispatch();
  const [toggleForm, updateToggleForm] = useState(false);
  const todoList: ITodo | ITodo[] = useAppSelector((state) => state?.todo);
  console.log(todoList);

  const handleToggleForm = () => {
    updateToggleForm(!toggleForm);
  };

  const removeTodoItem = (todoId: string) => {
    dispatch(removeTodo(todoId));
  };

  return (
    <>
      <main className="main-wrapper quicksand-font">
        <header className="main-header">
          <h2>Todo List</h2>
        </header>
        <ActionBtn handleAction={handleToggleForm} />
        {toggleForm && <AddTodo toggleForm={handleToggleForm} />}
        <section className="todo-list">
          {Array.isArray(todoList) && todoList.length > 0 ? (
            todoList.map((todo: ITodo) => (
              <ItemList
                key={todo.todoId}
                todoId={todo.todoId}
                todoName={todo?.todoName}
                todoDescription={todo?.todoDescription}
                removeItem={removeTodoItem}
              />
            ))
          ) : (
            <p>You have no todo task</p>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
