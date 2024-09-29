import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store"; // Import uuid for generating unique IDs



interface IAddTodo {
  toggleForm: () => void;
}

export const AddTodo = ({ toggleForm }: IAddTodo) => {
  const dispatch = useAppDispatch();
  // Create a state to hold the form data and update it
  const [todoData, updateTodoData] = useState({
    title: "",
    desc: "",
  });
  const [formStatus, updateStatus] = useState(false);
  const validateSubmit = !todoData.desc || !todoData.title;
  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateTodoData({ ...todoData, [name]: value });
  };

  const updateList = (e: React.FormEvent) => {
    e.preventDefault();
    updateStatus(true);
    // Add a new todo to the list
    setTimeout(() => {
      dispatch(
        addTodo({
          todoName: todoData.title,
          todoDescription: todoData.desc,
        })
      );
      toggleForm();
    }, 1000);
  };
  return (
    <section className="add-todo">
      <form onSubmit={updateList}>
        <div className="add-todo-input">
          <label className="add-label" htmlFor="title">
            Title
          </label>
          <input
            onChange={updateForm}
            placeholder="Enter title"
            type="text"
            name="title"
            id="title"
            value={todoData.title}
          />
        </div>
        <div className="add-todo-input">
          <label className="add-label" htmlFor="desc">
            Description
          </label>
          <input
            onChange={updateForm}
            type="text"
            placeholder="Enter description"
            id="desc"
            name="desc"
            value={todoData.desc}
          />
        </div>
        <div className="add-btn">
          <button
            className={validateSubmit ? `btn-disabled` : `btn-active`}
            disabled={validateSubmit}
          >
            {formStatus ? "Adding..." : "Add task"}
          </button>
        </div>
      </form>
    </section>
  );
};
