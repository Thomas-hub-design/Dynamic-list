import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() === '') return;
      setItems([...items, newItem]);
      setNewItem('');
    };

  return (
    <div className="container">
      <h2>Dynamic List Manager</h2>
      <div className="input-area">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter an Item"
          className="input-field"
        />
        <button onClick={addItem} className="add-button">
         Add Item
        </button>
      </div>
      <div className='textarea'>
      <ul className="list">
                {items.map((item, index) => (
                 <li key={index} className="list-item">{item}
          
                </li>
              ))}
            </ul>
      </div>
          
    </div>
  );
}

export default App;
