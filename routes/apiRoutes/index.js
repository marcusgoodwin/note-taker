const router = require('express').Router();
const { createNewNote, updateDb } = require('../../notes/notes');
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../develop/db/db.json');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const newNote = { id: uuidv4(), ...req.body };
  notes.push(newNote);
  createNewNote(newNote, notes);
  res.status(201).json(newNote);
});

router.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    updateDb(id, notes);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
