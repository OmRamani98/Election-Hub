import React, { useState } from 'react';

// Component to display a list of items
const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// Component to handle form input
const Form = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter item..."
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

// Main App component
const App = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [showList, setShowList] = useState(true);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <h1>React App Demo</h1>
      <button onClick={toggleList}>
        {showList ? 'Hide List' : 'Show List'}
      </button>
      {showList && <ItemList items={items} />}
      <Form addItem={addItem} />
    </div>
  );
};

export default App;
