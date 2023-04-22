import './App.css';
import axios from 'axios';
import React, { useState } from 'react';


function App() {

  const [isHovering, setIsHovering] = useState(false);
  const [fact, setFact ] = useState('');

  const handleClick = () => {
    const options = {
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/randomuser',
      headers: {
        'X-Api-Key': 'rYZpj+cX3gxRKnKg5eEB/w==JZ6ELBj7e8BcbTLw',
      }
    };

    axios.request(options)
    .then(response => {
      const { username, name, address, email, birthday } = response.data;
      setFact({ username, name, email, birthday, address });
    })
      .catch(error => console.error(error));
  };

  return (
    <div className="App" id = "App">
        <div className = {`Main${isHovering ? ' shadow-lg mb-5 bg-body-tertiary' : ''}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(true)}>
          <button class = "btn" onClick={handleClick}> Generate a User </button>
          <ul className = "list-group">
            {Object.values(fact).map((value, index) => (
              <li className="list-group-item align-middle" key={index}>{value}</li>
            ))}
            </ul>
        </div>
    </div>
  );
}

export default App;
