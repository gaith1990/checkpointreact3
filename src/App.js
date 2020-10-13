import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './component/profille/ProfilPhoto';
import Name from './component/profille/FullName';
import Adress from './component/profille/Address';
function App() {
  return (
    <div className="App">
      <Name/>
      <Photo/>
      <Adress/>
    </div>
  );
}

export default App;
