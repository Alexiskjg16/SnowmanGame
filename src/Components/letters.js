import React, { Component } from 'react';
import LetterButton from './LetterBeAButton'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class AllLetters extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pickedLetters: []
        }
      }

      addLetterToPickedArray = (letter) => {
        const _newPickedLetters = this.state.pickedLetters.slice()
        _newPickedLetters.push(letter)
        console.log(_newPickedLetters)
        this.setState({
          pickedLetters: _newPickedLetters
        })
      }
   
    render () {
        return (
            <div>
                {ALPHABET.map((letter, i) => {
                    return  <LetterButton 
                    key={i} 
                    letter={letter} 
                    picked={this.state.pickedLetters}
                    addLetterHandler={this.addLetterToPickedArray} />
                })}

                <h3> Letters Picked:</h3>
                {this.state.pickedLetters.map((letter, i) => {
                   return <div key={i}>{letter}</div>
                })}
                </div>
        )
    }
}

export default AllLetters