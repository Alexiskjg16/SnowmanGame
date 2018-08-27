import React, { Component } from 'react';
import words from '../Data/words.json'

const Words = this.state.words

class WordBox extends Component {
    render() {
      return (
        <div className="App">
          {words.map((words, i) => {
            return (
              <Words key={i}/>
            );
          })}
        </div>
      );
    }
  }

export default WordBox;