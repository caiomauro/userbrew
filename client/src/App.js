import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [fact, setFact] = useState({});

  const handleClick = () => {
    axios.get('/api/randomuser') // Make a GET request to your backend route
      .then(response => {
        const { username, name, address, email, birthday } = response.data;
        setFact({ username, name, email, birthday, address });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="App" id="App">
      <div className="Main">
        <button className="btn" onClick={handleClick}>
          Generate a User
        </button>
        <ul className="list-group">
          {Object.values(fact).map((value, index) => (
            <li className="list-group-item align-middle" key={index}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
