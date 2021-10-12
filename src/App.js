import logo from './logo.png';
import './App.css';
import PokeList from './PokeList.js'
import Deck from './Deck';
import Battle from './Battle';
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
      view = <Deck nav={this.state.nav} />
    } else if (this.state.nav === 'battle') {
      view = <Battle />
    }

    return (
      <div>
        <ul>
          <li><a className="active" onClick={this.handleAllCardsNav}> All Pokémon</a></li>
          <li><a onClick={this.handleDeckNav}>My Deck</a></li>
          <li className="logo-aln"><img src={logo} className="logo" alt="logo" /></li>
          <li className="nav-user"><a className="nav-user">Guest</a></li>
        </ul>
        {/*<!--nav>
          <button className="nav-btn" onClick={this.handleAllCardsNav} > All Pokémon</button>
          <button className="nav-btn" onClick={this.handleDeckNav}>My Deck</button>
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-user">Guest</button>
       </nav--><hr className=""></hr>*/}

        <div className="main-container">
          {view}
        </div>
      </div>

    );
  }
}

export default App;
