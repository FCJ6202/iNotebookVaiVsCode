import React, { useContext,useEffect } from 'react'
import NoteContext from '../Context/NoteContext';
import NoteItem from './NoteItem';

export default function DisplayNote(props) {
    const Note = useContext(NoteContext);
    useEffect( async () => {
        await Note.FetchData();
    }, [])
    return (
        <div className="container">
            <h2>Your Notes</h2>
            <div className="row">
                {Note.note.map((note) => {
                    return (
                        <div className="col-md-4 my-3" key={note._id}>
                            <NoteItem title={note.title} id = {note._id} description={note.description} tag = {note.tag} ModalHandleEdit = {props.ModalHandleEdit} ModalHandleSeen = {props.ModalHandleSeen} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
