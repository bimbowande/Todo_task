interface IAction {
  handleAction: () => void;
}

export const ActionBtn = ({ handleAction }: IAction) => {
  return (
    <div className="main-btn_section">
      <button onClick={handleAction}> Add New Task</button>
    </div>
  );
};
