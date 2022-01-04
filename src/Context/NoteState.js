import React, { useState } from 'react'
import NoteContext from './NoteContext'

export default function NoteState(props) {
  const notes =
    [
      {
        "_id": "61cd7411432b63a90a15031ba",
        "user": "61cd5f66651497d901aa6619",
        "title": "my title",
        "description": "jdjksahdjhjdkjsd",
        "date": "2021-12-30T08:55:45.628Z",
        "__v": 0
      },
      {
        "_id": "61ce90762fd35dce83d39070b",
        "user": "61cd5f66651497d901aa6619",
        "title": "my title new",
        "description": "jdjksahdjhjdkjsd new",
        "date": "2021-12-31T05:09:10.578Z",
        "__v": 0
      },
      {
        "_id": "61d2662a14f4926230329e4cac",
        "user": "61cd5f66651497d901aa6619",
        "title": "hello first node",
        "description": "nxjndjsjjjjjjjjjjjjjjjjjj first",
        "date": "2022-01-03T02:59:45.266Z",
        "__v": 0
      },
    ]
  const [note, setnote] = useState(notes);

  // Add notes
  const AddNote = (title, description, tag) => {

    // toDo by backend 
    console.log("Adding a new note");
    const noteuser = {
      "_id": "661ce90762fd35dce83d39070h",
      "user": "61cd5f66651497d901aa6619",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-12-31T05:09:10.578Z",
      "__v": 0
    }

    setnote(note.concat(noteuser));
  }

  const DeleteNote = (id) =>{
    var filterNote = note.filter((n) => n._id !== id);
    setnote(filterNote);
  }
  return (
    <div>
      <NoteContext.Provider value={{ note, AddNote,DeleteNote }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  )
}
