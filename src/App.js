import React, { Component } from "react";
import "./App.css";
import EmojiCharacterCard from "./EmojiCharacterCard";
import handemojichar from "./handemojichar.json";
import Wrapper from "./Wrapper";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

class App extends Component {
  state = {
     handemojichar,
     ClickEd: false,
     currentScore: 0,
     highscore: 0
  };

  handleClick = id => {
    this.shuffleArray();
    this.handleScore(id);
    console.log(this.state.timesClickEd);
  };

  handleScore = id => {
    this.state.handemojichar.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.setState({ ClickEd: false });
        this.handleIncrement();
      } 
      else if (id === element.id && element.clicked === true) {
        if (this.state.currentScore > this.state.highscore) {
          this.setState({ highscore: this.state.currentScore });
        }
        this.setState({ currentScore: 0 });
        this.setState({ ClickEd: true });
        this.state.handemojichar.forEach(element => (element.clicked = false));
        console.log(this.state.handemojichar);
      }
    } );
  };

  shuffleArray = () => {
    // Shuffle array of objects.
    const shuffledArr = this.shuffle(this.state.handemojichar);

    // Setting 'shuffledArr' as the new state.
    this.setState({ shuffledArr });
  };

  // handleIncrement increments this.state.currentScore by 1.
  handleIncrement = () => {

    // Using setState method to update component's state.
    this.setState({ currentScore: this.state.currentScore + 1});
  };

  // Function that takes an array as a parameter and shuffles it.
  shuffle = array => {
    var currentIndex = array.length,
      tempVal,
      randomIndex;

    // Remain elements to shuffle.
    while (0 !== currentIndex) {
      // Pick a remain element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap it with the current element.
      tempVal = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempVal;
    }
    return array;
  };

  render() {
    return (
      <Wrapper>

        <Navbar
          currentScore={this.state.currentScore}
          highscore={this.state.highscore}
        />

        <Jumbotron />
        {this.state.handemojichar.map(character => (
          <EmojiCharacterCard
            ClickEd={this.state.ClickEd}
            handleClick={this.handleClick}
            id={character.id}
            key={character.id}
            type={character.type}
            image={character.image}
            sign={character.sign}
          />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;