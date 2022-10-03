import "./App.css";
import imageRickMorty from "./img/rick-morty.png";
import { Characters } from "./components/Characters";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null);
  let reqApi = async () => {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let charactersData = await response.json();
    setCharacters(charactersData.results);
  };
  console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick & Morty App</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img
              src={imageRickMorty}
              alt="Rick & Morty"
              className="img-home"
            ></img>
            <button onClick={reqApi} className="btn-search">
              Get Data
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
