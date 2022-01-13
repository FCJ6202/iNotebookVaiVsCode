import React, { useState } from 'react'
import NoteContext from './NoteContext'
const host = 'http://localhost:4000';
//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjFjZDVmNjY2NTE0OTdkOTAxYWE2NjE5In0sImlhdCI6MTY0MDkyNDIyM30.9Aj-HKJyNIFLIqxsfYuoNBAlgUxQ7NA5jCR56883aEU'

export default function NoteState(props) {
  const notes = [];
  const [note, setnote] = useState(notes);


  const FetchData = async () => {
    const authToken = localStorage.getItem("token");
    const url = `${host}/u/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': authToken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    setnote(json);
  }

  // Add notes
  const AddNote = async (title, description, tag) => {
    const authToken = localStorage.getItem("token");
    console.log("Add" + authToken);
    const url = `${host}/u/notes/createnote`;
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': authToken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log("Adding a new note");
    setnote(note.concat(json));
  }

  const DeleteNote = async (id) => {
    const authToken = localStorage.getItem("token");
    // var filterNote = note.filter((n) => n._id !== id);
    console.log(id);
    const url = `${host}/u/notes/deletenotes/` + id;
    const response = await fetch(url, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': authToken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    await FetchData();
  }

  // EditNote
  const EditNote = async (id,title,description,tag) => {
    const authToken = localStorage.getItem("token");
    // var filterNote = note.filter((n) => n._id !== id);
    console.log(id);
    const url = `${host}/u/notes/updatenotes/` + id;
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': authToken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    await FetchData();
  }
  return (
    <div>
      <NoteContext.Provider value={{ note, AddNote, DeleteNote, FetchData,EditNote }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  )
}
