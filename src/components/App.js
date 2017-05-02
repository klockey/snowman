import React, { Component } from 'react'
import _ from 'lodash'
import LetterButton from './LetterButton'
import Snowman from './Snowman'
import Word from './Word'

// ALPHABET is an array of 26 letters, 'a' through 'z', i.e. ['a', 'b', 'c', ...'z']
const ALPHABET = _.range(26).map(i => String.fromCharCode(i + 97))

// WORDS is an array of 1024 different seven letter words
const WORDS = require('raw!../wordList.txt').trim().split('\n')

class App extends Component {

  constructor () {
    super()
    // TODO
    this.state = {
      lettersOfWord: [],
      currentWord: _.sample(WORDS),
      snowman: 0
    }
  }

  choose (letter) {
    // TODO
    console.log('You clicked', letter)
    this.state.lettersOfWord = this.state.lettersOfWord + letter
  }

  get points () {
    // TODO
    return this.state.currentWord.split('').filter((letter) => {
      return this.state.lettersOfWord.includes(letter)
    }).length
  }

  render () {
    const letters = ALPHABET.map((letter, i) => {
      return <LetterButton
        value={letter}
        onChoose={() => this.choose(letter)}
        disabled={this.state.lettersOfWord.includes(letter)}
        key={letter}
    />
    })
    return <div className='app'>
      <main>
        <Snowman step={this.points} size={400} />
        <Word value={this.state.currentWord} guesses={this.state.lettersOfWord} />
        <div className='keyboard'>
          {letters}
        </div>
      </main>
      <footer>Its like hangman, but, um... backwards or something.</footer>
    </div>
  }
}

export default App
