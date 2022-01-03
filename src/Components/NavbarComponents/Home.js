import React, { useContext } from 'react'
import NoteContext from '../../Context/NoteContext';
import NoteItem from '../NoteItem';



export default function Home() {
    const Note = useContext(NoteContext);
    return (
        <>
            <div className="container my-3">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className="container">
                <h2>Your Notes</h2>
                <div className="row">
                    {Note.map((note) => {
                        return (
                            <div className="col-md-4 my-3">
                                <NoteItem key={note._id} title={note.title} description={note.description} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
