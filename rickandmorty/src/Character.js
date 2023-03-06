import React from "react";

const Character = ({ character }) => {
  return (
    <div className="character">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>
        <strong>Status:</strong> {character.status}
      </p>
      <p>
        <strong>Species:</strong> {character.species}
      </p>
      <p>
        <strong>Gender:</strong> {character.gender}
      </p>
    </div>
  );
};

export default Character;