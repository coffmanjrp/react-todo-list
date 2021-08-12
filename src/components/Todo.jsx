const Todo = ({ todo, handleLeftClick, handleRightClick }) => {
  return (
    <li
      className={todo.isComplete ? 'completed' : ''}
      onClick={() => handleLeftClick(todo)}
      onContextMenu={(e) => handleRightClick(todo, e)}
    >
      {todo.text}
    </li>
  );
};

export default Todo;
