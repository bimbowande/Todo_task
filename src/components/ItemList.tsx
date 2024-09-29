import { useState } from "react";
import { ITodo } from "../domains";

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
        <div className="ticker">
          <input
            type="checkbox"
            checked={cancelForm}
            onClick={() => handleCancelForm()}
          />
        </div>
        <div>
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
        {cancelForm && (
          <div className="article-remove-confirmation">
            <button
              className="del-item"
              onClick={() => todoId && removeItem && removeItem(todoId)}
            >
              Delete Item
            </button>
            <button className="del-cancel" onClick={() => handleCancelForm()}>
              Cancel
            </button>
          </div>
        )}
      </article>
    </>
  );
};
