import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const ls = localStorage.getItem('todos');

    if (ls) {
      const getLs = getLocalStorage();
      setTodos(getLs);
    }
  }, []);

  useEffect(() => {
    setLocalStorage(todos);
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
        isComplete: false,
      },
    ]);

    setText('');
  };

  const handleLeftClick = (todo) => {
    const newTodos = todos.map((obj) =>
      obj.id === todo.id ? { ...todo, isComplete: !todo.isComplete } : obj
    );

    setTodos(newTodos);
  };

  const handleRightClick = (todo, e) => {
    e.preventDefault();

    const newTodos = todos.filter((obj) => obj.id !== todo.id);

    setTodos(newTodos);
  };

  const getLocalStorage = () => {
    const ls = JSON.parse(localStorage.getItem('todos'));
    return ls;
  };

  const setLocalStorage = (item) => {
    const ls = localStorage.setItem('todos', JSON.stringify(item));
    return ls;
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your todo"
          autoComplete="off"
        />
        <ul className="todos">
          {todos.length > 0 &&
            todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                handleLeftClick={handleLeftClick}
                handleRightClick={handleRightClick}
              />
            ))}
        </ul>
      </form>
      <small>
        Left click to toggle completed. <br />
        Right click to delete todo.
      </small>
    </div>
  );
}

export default App;
