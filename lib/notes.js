const fs = require("fs");
const path = require("path");

function createNote(note, notes) {
  notes.push(note);
  writeFile(notes);
  return note;
}

function deleteNote(noteId, notes) {
  //get the note to delete
  const note = notes.filter((n) => n.id === noteId)[0];
  if (note) {
    //get the note  index from the notes
    const noteIndex = notes.indexOf(note);
    //delete the note from the notes array
    notes.splice(noteIndex, 1);
    //write array in the file
    writeFile(notes);
    return note;
  }
}

function getNote(noteId, notes) {
  //get the note
  const note = notes.filter((n) => n.id === noteId)[0];
  return note;
}

function writeFile(notes) {
  const filePath = path.join(__dirname, "../db/db.json");
  fs.writeFileSync(filePath, JSON.stringify({ notes }, null, 2));
}

module.exports = { createNote, getNote, deleteNote };