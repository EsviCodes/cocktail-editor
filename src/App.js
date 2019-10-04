import React from "react";
import "./App.css";
import CocktailListContainer from "./components/CocktailListContainer";
import CocktailDetailsContainer from "./components/CocktailDetailsContainer";

function App() {
  return (
    <div className="App">
      <CocktailListContainer />
      <CocktailDetailsContainer />
    </div>
  );
}

export default App;
