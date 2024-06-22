import React, { useState } from "react";
import Note from "./Note";
import uuid from "react-uuid";

function CreateArea({ addNote }) {
  const [note, setNote] = useState({
    id: uuid() || null, // Date.now() 
    titie: "" || null,
    content: "",
  });

  const handleChange = (e) => {
    setNote({
      ...note,
      id: uuid(),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          type="text"
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </>
  );
}

export default CreateArea;
