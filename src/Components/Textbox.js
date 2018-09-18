import React, { Component } from 'react';
import words from '../Data/words.json';





class WordBox extends Component {

    constructor(props) {
        super(props)
        /**
         * props:{
         *  seletedWord: the word that the user is guessing, string
         *  picked letters: the letters the user picked, ['letters']
         * }
         */
         // we want to loop over each letter in the selectedWord, and check if each letter has been picked. 

         const displayWord = this.props.selectedWord.split('').map((letter, i) => {
            if (this.props.pickedLetters.includes(letter)){
                return letter
            } else {
                return " _ "
            }
         }).join('')
        
        const randomNumber = Math.floor(Math.random()*words.length)
        this.state = {
          randomWords: words[randomNumber], 
          displayWord: displayWord
         
        }
       // let hiddenWord = (this.state.randomWords.map('_'))
        console.log(this.state.displayWord)
      }
    render() {
       
      return (
            <div>
            <h1>{this.state.displayWord}</h1>
              {console.log(this.state.displayWord.split(''))}
            </div>
            );
          }}

export default WordBox;