const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.resolve('public/notes.html'));
});

router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
