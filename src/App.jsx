import { useState } from 'react';
import Todo from './components/Todo';
import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
      },
    ]);
    setText('');
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
                todos={todos}
                setTodos={setTodos}
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
