import React, { useState, useEffect } from "react";
import Character from "./Character";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );
      const data = await response.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      <div className="characters">
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default App;
