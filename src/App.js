import React from 'react';
import './App.css';
import Home from './components/home';
import NavigationBar from './components/navbar';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
          <Home />
      </header>
    </div>
  );
}

export default App;
