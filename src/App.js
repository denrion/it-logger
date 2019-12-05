import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    // Inti Materialize JS
    M.AutoInit();
  }, []);

  return <div className='App'>My App</div>;
};

export default App;
