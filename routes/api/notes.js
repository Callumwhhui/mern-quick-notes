const express = require('express')
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');


router.get('/', notesCtrl.index)
router.post('/', notesCtrl.addNote)

module.exports = router;