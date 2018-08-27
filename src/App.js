import React, { Component } from 'react';
import WordBox from './Components/Textbox'
import './App.css';
import AllLetters from './Components/letters'



class App extends Component {
  render() {
    return (
      <div className="App">
      <AllLetters/>
      <WordBox/>
        
      </div>
    );
  }
}

export default App;
