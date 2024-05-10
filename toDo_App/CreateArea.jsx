import React, { useState } from "react";

function CreateArea({ addNote }) {
  const [note, setNote] = useState({
    id: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setNote({
      ...note,
      id: Date.now(),
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
          placeholder="title"
        />
        <input
          type="text"
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="content"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default CreateArea;
