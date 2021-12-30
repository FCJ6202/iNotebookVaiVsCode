const express = require('express');
const fetchData = require('../middleware/fetchData');
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


module.exports = router;