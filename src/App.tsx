import React, { useState } from "react";
import { Note } from "./models/note.model";
import "./App.css";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Metings",
      text: "Schedule meeting with UI team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return <div className="App">App</div>;
}

export default App;
