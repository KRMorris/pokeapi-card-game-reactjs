import logo from './logo.png';
import './App.css';
import PokeList from './PokeList.js'

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>*/
    <div>
      <nav>
        <button className="">All Pokémon</button>
        <button className="">My Deck</button>
        <img src={logo} className="logo" alt="logo" />
        <button className="">Guest</button>
      </nav>
      <hr className=""></hr>
      <div className="main-container">
        <PokeList />
      </div>
    </div>
  );
}

export default App;
