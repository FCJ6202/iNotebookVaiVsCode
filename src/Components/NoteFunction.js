import React,{useContext, useState} from 'react'
import NoteContext from '../Context/NoteContext';

export default function AddNote() {
    const context = useContext(NoteContext);
    // yaha pari ... ka use krke tino ka ek sath bhi change kr skte hai
    const [Note, setNote] = useState({
        title : "",
        desc : "",
        tag : ""
    })
    const Handle = (e) =>{
        setNote({...Note,[e.target.id]:e.target.value});
    }
    const HandleSubmit = (e) => {
        context.AddNote(Note.title,Note.desc,Note.tag);
    }

    return (
        <div className="container my-3">
            <h1>Add Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" required onChange={Handle} id="title"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <textarea type="text" className="form-control" required rows={4} onChange={Handle} id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                    <input type="text" className="form-control" onChange={Handle} id="tag" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button disabled={Note.title === "" || Note.desc === ""} type="submit" className="btn btn-primary" onClick={HandleSubmit} >Add Note</button>
            </form>
        </div>
    )
}
