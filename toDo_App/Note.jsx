import React from "react";

function Note({ id, title, content, deleteNote }) {
  return (
    <>
      <p>
        {title} {content}
      </p>
      <button onClick={() => deleteNote(id)}>delete</button>
    </>
  );
}

export default Note;
