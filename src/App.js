import logo from './logo.png';
import './App.css';
import PokeList from './PokeList.js'
import Deck from './Deck';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'all'
    }
  }

  handleDeckNav = () => {
    this.setState({ nav: 'deck' });
    console.log('Deck click');
  }
  handleAllCardsNav = () => {
    //loca = true;
    this.setState({ nav: 'all' });
    console.log('all click');
  }

  render() {
    let view;
    if (this.state.nav === 'all') {
      view = <PokeList />
    } else if (this.state.nav === 'deck') {
      view = <Deck />
    }

    return (
      <div>
        <nav>
          <button className="" onClick={this.handleAllCardsNav} > All Pokémon</button>
          <button className="" onClick={this.handleDeckNav}>My Deck</button>
          <img src={logo} className="logo" alt="logo" />
          <button className="">Guest</button>
        </nav>
        <hr className=""></hr>
        <div className="main-container">
          {view}
        </div>
      </div>

    );
  }
}

export default App;
