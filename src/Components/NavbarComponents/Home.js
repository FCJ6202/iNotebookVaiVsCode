import React, { useRef,useState,useContext } from 'react'
import NoteFunction from '../NoteFunction'
import DisplayNote from '../DisplayNote'
import NoteContext from '../../Context/NoteContext';



export default function Home() {
    const ref = useRef(null);
    const context = useContext(NoteContext);

    // yaha pari ... ka use krke tino ka ek sath bhi change kr skte hai
    const [Note, setNote] = useState({
        title : "",
        desc : "",
        tag : "",
        id : ""
    })
    const Handle = (e) =>{
        setNote({...Note,[e.target.id]:e.target.value});
    }
    const HandleSubmit = (e) => {
        context.EditNote(Note.id,Note.title,Note.desc,Note.tag);
    }

    const ModalHandleEdit = (id,title,desc,tag) => {
        setNote({title,desc,tag,id});
        ref.current.click();
    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" style={{ display: "none" }} className="btn btn-primary" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                <input type="text" className="form-control" required value = {Note.title} onChange={Handle} id="title" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                <textarea type="text" className="form-control" required rows={4} value={Note.desc} onChange={Handle} id="desc" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                                <input type="text" className="form-control" onChange={Handle} value = {Note.tag} id="tag" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={HandleSubmit} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <NoteFunction />
            <DisplayNote ModalHandleEdit={ModalHandleEdit} />
        </>
    )
}
