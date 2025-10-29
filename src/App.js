import React, { useState } from 'react';
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go To The Market",
      desc: "You need to go to the market to get this job done",
      dueDate: new Date("2025-07-20")
    },
    {
      id: 2,
      title: "Go To The Mall",
      desc: "You need to go to the mall to get this job done",
      dueDate: new Date("2025-07-22")
    },
    {
      id: 3,
      title: "Go To The Office",
      desc: "You need to go to the office to get this job done",
      dueDate: new Date("2025-07-22")
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newDueDate, setNewDueDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAddTodo = () => {
    if (newTitle.trim() === '' || newDesc.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      title: newTitle,
      desc: newDesc,
      dueDate: newDueDate
    };

    setTodos([...todos, newTodo]);
    setNewTitle('');
    setNewDesc('');
    setNewDueDate(new Date());
  };

  const handleDelete = (idToRemove) => {
    setTodos(todos.filter((todo) => todo.id !== idToRemove));
  };

  const filteredTodos = todos.filter(todo =>
    todo.dueDate.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="App">
      <Header title=" 𝔹𝕝𝕠𝕤𝕤𝕠𝕞𝕃𝕚𝕤𝕥  " />

      <div className="todo-count-banner">
        🔮 𝚃𝚘𝚝𝚊𝚕 𝚃𝚘𝙳𝚘 𝚃𝚘𝚍𝚊𝚢'𝚜 : {filteredTodos.length}
      </div>

      <div className="main-content" style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <div className="todo-form">
            <input
              type="text"
              placeholder="𝙴𝚗𝚝𝚎𝚛 𝚝𝚒𝚝𝚕𝚎"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="input-title"
            />
            <input
              type="text"
              placeholder="𝙴𝚗𝚝𝚎𝚛 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="input-desc"
            />
            <input
              type="date"
              value={newDueDate.toISOString().split('T')[0]}
              onChange={(e) => setNewDueDate(new Date(e.target.value))}
              className="input-date"
            />
            <button className="add-btn" onClick={handleAddTodo}>𝙰𝚍𝚍 𝚃𝚘𝚍𝚘</button>
          </div>

          <Todos todos={filteredTodos} onDelete={handleDelete} />
        </div>

        <div className="custom-calendar">
          <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}> ✨𝚌𝚊𝚕𝚊𝚗𝚍𝚎𝚛</h3>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;