export interface ITodo {
  todoId?: string | null;
  todoName: string | null;
  todoDescription?: string;
  toggleRemove?: () => void;
  displayRemove?: boolean;
  removeItem?: (todoId: string) => void;
  toggleOverlay?: () => void;
}
