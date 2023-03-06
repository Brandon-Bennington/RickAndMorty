import { useState, useEffect } from "react";
import Character from "./Character";
import "./index.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  const fetchCharacters = async (url = "https://rickandmortyapi.com/api/character") => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
      setNextUrl(data.info.next);
      setPrevUrl(data.info.prev);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
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
      <div className="pagination">
        <button onClick={() => fetchCharacters(prevUrl)} disabled={!prevUrl}>
          Previous Page
        </button>
        <button onClick={() => fetchCharacters(nextUrl)} disabled={!nextUrl}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default App;