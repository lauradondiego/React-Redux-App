import React from "react";
import "./App.css";

import CatFactsList from "./components/CatFactsList";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <h1>Cat Facts</h1>
      <CatFactsList />
    </div>
  );
}

export default App;

// steps:
// 1- build components
// 2- connect webcam or whatever api list - test connection
// 3- define states in jsx - landing state, loading state, error state, success state
// 4- build action creator
// 5- define action types (talking about today)
// 6- add redux logic
