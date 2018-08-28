import React, { Component } from 'react';
import WordBox from './Components/Textbox'
import './App.css';
import AllLetters from './Components/letters'
import SnowImage from './Components/SnowmanPic'



class App extends Component {
  render() {
    return (
      <div className="App">
      <SnowImage/>
      <WordBox/>
      <AllLetters/>
      </div>
    );
  }
}

export default App;
