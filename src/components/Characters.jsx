import React from "react";

export const Characters = ({ characters, setCharacters }) => {
  const resetCharacters = () => {
    setCharacters(null);
  };
  return (
    <div className="characters">
      <span className="back-home" onClick={resetCharacters}>
        Back to Home
      </span>
      <h1 className="character-title">Characters</h1>
      <div className="container-characters">
        {characters.map((character) => (
          <div className="character-container" key={character.id}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h5>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive"></span>
                    <span>Alive</span>
                  </>
                ) : (
                  <>
                    <span className="dead"></span>
                    <span>Dead</span>
                  </>
                )}
              </h5>
              <p>
                <span className="text-grey">Episodes:</span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Specie:</span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        Back to Home
      </span>
    </div>
  );
};
