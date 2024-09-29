import { ITodo } from "../domains";

export const ItemList = ({
  todoId,
  todoName,
  todoDescription,
  removeItem,
}: ITodo) => {
  return (
    <article className="article-container">
      <h4>{todoName}</h4>
      <p>{todoDescription}</p>
      <div>
        <button onClick={() => todoId && removeItem && removeItem(todoId)}>remove</button>
      </div>
    </article>
  );
};
