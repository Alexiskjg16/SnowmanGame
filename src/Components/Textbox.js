import React, { Component } from 'react';
import words from '../Data/words.json'



class WordBox extends Component {

    constructor() {
        super()
        const randomNumber = Math.floor(Math.random()*words.length)
        
        this.state = {
          randomWords: words[randomNumber]
        }
       // let hiddenWord = (this.state.randomWords.map('_'))
        console.log(this.state.randomWords)
      }
    render() {
       
      return (
            <div>
            <h1>{this.state.hiddenWord}</h1>
              {console.log(this.state.randomWords.split(''))}
            </div>
            );
          }}

export default WordBox;