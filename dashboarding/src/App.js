import React from 'react';
import logo from './logo.svg';
import './App.css';

class HeaderBar extends React.Component{
  render(){
    return (
      <div className="test-header">Dashboarding</div>
    );
  }
}

class Boxes extends React.Component {
  render(){
    return (<div>
      
      </div>);
  }
}

class Workspace extends React.Component{
  render(){
    return (<div>

    </div>);
  }
}

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
