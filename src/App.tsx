import React, { useState } from "react";

import { Note } from "./models/note.model";
import "./App.css";
import Header from "./components/Header";

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

  return (
    <>
      <Header />
    </>
  );
}

export default App;
