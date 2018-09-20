import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import cities from "./cities.json";
// import './App.css';

// Shuffles array in place. ES6 version
function shuffleImages(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  // Setting this.state.cities to the cities json array
  state = {
    cities,
    currentScore: 0,
    topScore: 0,
    selectedImages: [],
    gameOver: false
  };

  selectImage = id => {
    if (this.state.selectedImages.includes(id)) {
      console.log("Already selected image")
    }
    else {
      const score = this.state.currentScore + 1
      const shuffledImages = shuffleImages(cities)

      if (score > this.state.topScore) {
        this.setState({topScore:score})
      }


      this.setState({selected:this.state.selectedImages.push(id)})
      this.setState({currentScore:score})
      this.setState({cities:shuffledImages})

      console.log("currentScore")
      console.log(this.state.currentScore)
    }
  }
  
  
  
  render() {
    return (
      <div className="App">
        <Navbar 
          title={"Clicky Game"}
          status={this.state.gameOver}
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
                shuffleImages={this.shuffleImages}
              />
            ))}
          {/* </div> */}
        </Wrapper>
        <Footer title={"World Cities Clicky Game"}></Footer>
      </div>
    );
  }
}

export default App;
