import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

function Header(){
  return (
    <header className='header'>
        <h3>모두의 계산기</h3> 
    </header>
  )
}


export default App;
