import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character"
import Details from "./components/Details"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
  const [characterId, setCharacterId] = useState("1");

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const openDetails = (id) =>{
  setCharacterId(id);
};
const closeDetails = () => {
  setCharacterId(null);
};

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then((res) => {
      setCharacter(res.data.results);
      // console.log(res.data.results[1]);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      {characterId && (
        <Details idC={characterId} close={closeDetails}/>
      )}
      {character.map((ch) => {
        return <Character key={ch.id} info = {ch} action={openDetails}/>
      })}
      
    </div>
  );
}

export default App;
