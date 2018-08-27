import React, { Component } from 'react';
import words from '../Data/words.json'



class WordBox extends Component {

    constructor() {
        super()
        const randomNumber = Math.floor(Math.random()*words.length)
        this.state = {
          randomWords: words[randomNumber]
        }
      }
    render() {
      return (
            <div>
              <p>{this.state.randomWord}</p>
              {console.log(this.state.randomWord)}
            </div>
            );
          }}

export default WordBox;