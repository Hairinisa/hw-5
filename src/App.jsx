import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index]);
  };

  const saveTodo = () => {
    const updatedTodos = todos.map((todo, i) => (i === editingIndex ? editingText : todo));
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingText('');
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="жаз"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={saveTodo}>Назад</button>
              </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => deleteTodo(index)}>Удалить</button>
                <button onClick={() => editTodo(index)}>Изминить</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
