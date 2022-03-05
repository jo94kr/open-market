import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [testStr, setTestStr] = useState('');

  function callback(str) {
    setTestStr(str);
  }

  useEffect(
    () => {
      axios({
        url: '/home',
        method: 'GET'
      }).then((res) => {
        callback(res.data);
      })
    }, []
  );

  return (
    <div className="App">
      <header className="App-header">
        {testStr}
      </header>
      <body>
        testtest
      </body>
    </div>
  );
}

export default App;
