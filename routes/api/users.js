const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');


// all route start with /api/users
router.post('/', usersCtrl.create);
router.post('/login',usersCtrl.login );

module.exports = router;