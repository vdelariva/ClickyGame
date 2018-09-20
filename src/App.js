import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import cities from "./cities.json";
// import './App.css';

// Shuffles array in place. ES6 version
function shuffleArray(a) {
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
    selected: [],
    memoryStatus: ""
  };
  
  render() {
    return (
      <div className="App">
        <Navbar title={"Clicky Game"}></Navbar>
        <Header
          title={"World Cities"} 
          instructions={"Travel to all the cities, but you can only visit each city once!"}
        />

        <Wrapper>
            {cities.map(city => (
              <ImageCard
                selectCity={this.selectCity}
                key={city.id}
                id={city.id}
                name={city.name}
                image={city.image}
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
