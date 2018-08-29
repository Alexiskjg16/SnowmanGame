import React, { Component } from 'react';
import WordBox from './Components/Textbox'
import './App.css';
import AllLetters from './Components/letters'
import SnowImage from './Components/SnowmanPic'
import words from './Data/words.json'
import _newPickedLetters from './Components/letters'



class App extends Component {
  constructor(props) {
    super(props) 
    
  const randomNumber = Math.floor(Math.random()*words.length)
  this.state = {
    randomWords: words[randomNumber]
  }

  }
  render() {
    return (
      <div className="App">
      <SnowImage/>
      <WordBox selectedWord={this.state.randomWords} pickedLetters={'_newPickedLetters'} />
      <AllLetters/>
      </div>
    );
  }
}

export default App;
