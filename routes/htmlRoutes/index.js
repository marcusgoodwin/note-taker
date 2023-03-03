const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve('develop/public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.resolve('develop/public/notes.html'));
});

router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
