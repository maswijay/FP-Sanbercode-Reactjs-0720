import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './layout/Main'
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Main />
      </UserProvider>
      
    </div>
  );
}

export default App;
