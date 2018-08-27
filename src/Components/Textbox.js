import React, { Component } from 'react';
import words from '../Data/words.json'



class WordBox extends Component {

    constructor() {
        super()
        const randomNumber = Math.floor(Math.random()*words.length)
        this.state = {
          randomWords: words[randomNumber]
        }
        const hiddenWord = (this.state.randomWords)
        console.log(this.state.randomWords.split(''))
      }
    render() {
      return (
            <div>
            <h1> {this.state.hiddenWord}</h1>
              {console.log(this.state.randomWords)}
            </div>
            );
          }}

export default WordBox;