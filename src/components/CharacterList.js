import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const CharacterList = ({ characters }) => {
  const [query, updateQuery] = useState("");

  return (
    <section className="character-list">
      <SearchForm updateQuery={updateQuery}/>
      {characters.map(character => {
        let passed = false;
        Object.values(character).forEach(value => {
          if ((typeof value === "string") && (!(value.includes("https")))) {
            if (value.toLowerCase().includes(query.toLowerCase())) {
              passed = true;
            }
          }
        })
        if (passed) {
          return <CharacterCard character={character}/>
        }
      })}
    </section>
  );
}

export default CharacterList;