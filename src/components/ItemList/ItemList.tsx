import { useState } from "react";
import { ITodo } from "../../domains";

export const ItemList = ({
  todoId,
  todoName,
  todoDescription,
  removeItem,
}: ITodo) => {
  const [cancelForm, updateCancelForm] = useState(false);
  const handleCancelForm = () => {
    updateCancelForm(!cancelForm);
  };
  return (
    <>
      <article className="article-container">
        <div className="article-content">
          <input
            type="checkbox"
            checked={cancelForm}
            onChange={() => handleCancelForm()}
          />
          <div className="article-text">
            <h3
              style={
                cancelForm
                  ? { textDecoration: `line-through` }
                  : { textDecoration: `none` }
              }
            >
              {todoName}
            </h3>
            <p>{todoDescription}</p>
          </div>
        </div>
        {cancelForm && (
          <div className="article-remove-confirmation">
            <button
              className="del-item"
              onClick={() => todoId && removeItem && removeItem(todoId)}
            >
              remove
            </button>
            <button className="del-cancel" onClick={() => handleCancelForm()}>
              cancel
            </button>
          </div>
        )}
      </article>
    </>
  );
};
