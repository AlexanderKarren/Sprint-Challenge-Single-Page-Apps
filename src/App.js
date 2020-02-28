import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import { Switch, Route } from "react-router-dom";
import axios from "axios";


export default function App() {
  const [charactersList, updateList] = useState([]);

  useEffect(() => {
    axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {
      updateList(response.data.results);
    })
    .catch(error => {
      console.log("ERP MORTY", error);
    })
  }, [])

  console.log(charactersList);
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/characters">
          <CharacterList characters={charactersList}/>
        </Route>
        <Route path="/locations">
          <LocationsList />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
