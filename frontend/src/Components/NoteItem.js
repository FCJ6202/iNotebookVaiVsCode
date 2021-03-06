import React from 'react'
import { useContext } from 'react/cjs/react.development'
import NoteContext from '../Context/NoteContext'

export default function NoteItem(props) {
    const context = useContext(NoteContext);
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title.slice(0,30)}{(props.title.length>30)?"....":null}</h5>
                <p className="card-text">{props.description.slice(0,15)}....</p>
                <i className="far fa-trash-alt mx-2" onClick={()=>context.DeleteNote(props.id)}></i><i className="far fa-edit" onClick={()=>props.ModalHandleEdit(props.id,props.title,props.description,props.tag)}></i><i className="fas fa-eye mx-2" onClick={()=>props.ModalHandleSeen(props.id,props.title,props.description,props.tag)}></i>
            </div>
        </div>
    )
}
