import React from "react";
import AllNotes from "./allNotes";
import Notes from "../../notes";



export default function NoteComponent(){
    return(
    Notes.map((note) => {
              return (
                <AllNotes
                  key={note.id}
                  title={note.title}
                  content={note.content}
                />
              );
            })
    );
}