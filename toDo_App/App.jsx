import React, { useState } from "react";

import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => id !== n.id));
    // const newNotes =  {notes.filter((n, idx)=> idx !== id)}
  };

  return (
    <div>
      <CreateArea addNote={addNote} />

      {notes.map((n, idx) => {
        return (
          <div>
            <Note
              id={n.id}
              deleteNote={deleteNote}
              title={n.title}
              content={n.content}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
