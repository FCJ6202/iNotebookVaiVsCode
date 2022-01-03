import React from 'react'

export default function NoteItem(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <i class="far fa-trash-alt mx-2"></i><i class="far fa-edit"></i><i class="fas fa-eye mx-2"></i>
            </div>
        </div>
    )
}
