import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes.js";

function App() {
  const [note, setNote] = useState([]);

  function addNote(inputText) {
    setNote((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function deleteNote(id) {
    setNote((prevValue) => {
      return prevValue.filter((items, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClicked={addNote} />
      {note.map((items, index) => (
        <Note
          key={index}
          id={index}
          title={items.title}
          content={items.content}
          onClicked={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
