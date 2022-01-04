const express = require('express');
const fetchData = require('../middleware/fetchData'); // req.UserData.id = user ka id hai
const router = express.Router();
const Note = require('../model/Notes');
const { body, validationResult } = require('express-validator');

// Router 2 : create a note after login
router.post('/createnote', fetchData, [body('title', 'please input valid title').isLength({ min: 1 }),
body('description', 'please enter atleast 4 length password').isLength({ min: 4 })], async (req, res) => {
    console.log("Hello notes page");
    // checking validation of request(req) which was send by user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("error");
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, tag } = req.body;
        const note = await new Note({
            user: req.UserData.id,
            title, description, tag
        })
        note.save();
        res.json(note);
    } catch (error) {
        console.log(error)
        res.json({ error: error.message });
    }
})

// Router 1 : fetch all notes after login
router.get('/fetchallnotes', fetchData, async (req, res) => {
    console.log("Hello fetch notes page");

    try {
        const user = req.UserData.id;
        const UserNotes = await Note.find({ user });
        res.send(UserNotes);
    } catch (error) {
        console.log(error)
        res.json({ error: error.message });
    }
})

// Router 3 : update the notes after login
router.put('/updatenotes/:id', fetchData, async (req, res) => { // put for update the database
    console.log(req.params.id);
    try {

        let { title, description, tag } = req.body;


        const newNote = {}; // new update note in that newNote 
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        let note = await Note.findById(req.params.id);
        if (!note) {  // if note are not in database means kahi koi delete kr diya aur usse fetch krne ka kosis kr ra
            return res.status(401).send("Not found");
        }
        if (note.user != req.UserData.id) { // if one user try to fetch another user data
            return res.status(401).send("Not allowed");
        }
        if (note.id != req.params.id) { // if user try to different notes
            return res.status(401).send("Not allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, newNote); // this function find the notes and update it
        res.json(note);

    } catch (error) {
        console.log(error)
        res.json({ error: error.message });
    }

})

// Router 4 : delete the notes after login
router.delete('/deletenotes/:id', fetchData, async (req, res) => {
    console.log(req.params.id);
    try {

        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(401).send("Not found"); // same as above 
        }
        if (note.user != req.UserData.id) {
            return res.status(401).send("Not allowed"); // same as above 
        }
        if (note.id != req.params.id) {
            return res.status(401).send("Not allowed"); // same as above 
        }
        await Note.findByIdAndDelete(req.params.id); // for delete the notes
        res.json("Success");

    } catch (error) {
        console.log(error)
        res.json({ error: error.message });
    }

})


module.exports = router;