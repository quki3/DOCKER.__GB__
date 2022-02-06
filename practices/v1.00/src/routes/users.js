const controllers = require('../controllers/users.js');
const router = require('express').Router();

//crud
router.get('/',controllers.getAll)

module.exports = router;
