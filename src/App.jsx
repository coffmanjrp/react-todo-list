import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <form className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter your todo"
          autocomplete="off"
        />
        <ul className="todos"></ul>
      </form>
      <small>
        Left click to toggle completed. <br />
        Right click to delete todo.
      </small>
    </div>
  );
}

export default App;
