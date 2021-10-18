const router = require("express").Router();
const { notes } = require("../../db/db");
const { createNote, getNote, deleteNote } = require("../../lib/notes");

router.get('/notes', (req, res) => {
    res.json(note);
});

router.post('/notes', (req, res) =>{
    req.body.id = note.length.toString();
    const notes = createNote(req.body, note);
    res.json(notes);
})

module.exports = router;