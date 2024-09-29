export interface ITodo {
  todoId: string | null;
  todoName: string | null;
  todoDescription?: string;
  removeItem?: (todoId: string) => void;
}
