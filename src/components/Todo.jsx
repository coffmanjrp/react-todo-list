import { useState } from 'react';

const Todo = ({ todo, todos, setTodos }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleLeftClick = (id) => {
    setIsComplete((prev) => !prev);
  };

  const handleRightClick = (id, e) => {
    e.preventDefault();

    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  return (
    <li
      className={isComplete ? 'completed' : ''}
      onClick={() => handleLeftClick(todo)}
      onContextMenu={(e) => handleRightClick(todo.id, e)}
    >
      {todo.text}
    </li>
  );
};

export default Todo;
