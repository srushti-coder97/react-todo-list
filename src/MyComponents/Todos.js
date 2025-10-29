import React from 'react';

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container">
      <h3>Todos List</h3>
      <ul className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <div className="todo-content">
                <span className="todo-title">{todo.title}</span>
                <span className="todo-desc">{todo.desc}</span>
              </div>
              <button className="delete-btn" onClick={() => onDelete(todo.id)}>✖</button>
            </li>
          ))
        ) : (
          <li className="empty-message">No todos available 😴</li>
        )}
      </ul>
    </div>
  );
};

export default Todos;