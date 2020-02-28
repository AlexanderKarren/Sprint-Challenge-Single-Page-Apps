import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {

  return (
    <section className="character-list">
      {characters.map(character => {
        return <CharacterCard character={character}/>
      })}
    </section>
  );
}

export default CharacterList;