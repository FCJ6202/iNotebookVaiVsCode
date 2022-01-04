import React, { useContext } from 'react'
import NoteContext from '../Context/NoteContext';
import NoteItem from './NoteItem';

export default function DisplayNote() {
    const Note = useContext(NoteContext);
    return (
        <div className="container">
            <h2>Your Notes</h2>
            <div className="row">
                {Note.note.map((note) => {
                    return (
                        <div className="col-md-4 my-3" key={note._id}>
                            <NoteItem title={note.title} id = {note._id} description={note.description} tag = {note.tag} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
