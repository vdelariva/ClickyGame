import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import cities from "./cities.json";

// Set possible max score
const maxScore = cities.length;

class App extends Component {
  // Setting this.state.cities to the cities json array
  state = {
    cities,
    currentScore: 0,
    topScore: 0,
    selectedImages: [],
    gameMsg: "Click a city to begin!"
  };

  selectImage = id => {
    // If image has already been selected (i.e. included in the selectedImages array), then Game Over!
    if (this.state.selectedImages.includes(id)) {
      this.setState({gameMsg:"Your travels have ended..."})
      this.resetGame()
    }
    // Else, increment the score
    else {
      const score = this.state.currentScore + 1

      // Update topScore if currentScore is greater than current topScore
      if (score > this.state.topScore) {
        this.setState({topScore:score})
      }

      // If selected all images without repeating, then you win!
      if (score === maxScore) {
        this.setState({gameMsg: "Congratulations, your passport is full!"})
        this.resetGame()
      }
      // Add current image id to selectedImages array, update score, shuffle images and continue playing
      else {
        this.setState({gameMsg: "You visited a new city!"})
        this.setState({selected:this.state.selectedImages.push(id)})
        this.setState({currentScore:score})
        this.shuffleImages()
      }
    }
  }

shuffleImages = () => {
  const shuffledImages = this.shuffleArray(cities)
  this.setState({cities:shuffledImages})
}

// Shuffles array in place. ES6 version
shuffleArray = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Resets the game parameters, shuffle images
resetGame = () => {
  this.setState({currentScore:0})
  this.setState({selectedImages:[]})
  this.shuffleImages()
}
  
  // Render the page
  render() {
    return (
      <div className="App">
        <Navbar 
          title={"Clicky Game"}
          msg={this.state.gameMsg}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Header
          title={"World Cities"} 
          instructions={"Travel to all the cities, but you can only visit each city once!"}
        />

        <Wrapper>
          {cities.map(city => (
            <ImageCard
              key={city.id}
              id={city.id}
              name={city.name}
              image={city.image}
              selectImage={this.selectImage}
            />
          ))}
        </Wrapper>
        <Footer title={"World Cities Clicky Game"}></Footer>
      </div>
    );
  }
}

export default App;
