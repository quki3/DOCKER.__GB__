const router = require('express').Router();
const controllers = require('../controllers/dev');

router.get('/services',controllers.services);

module.exports = router;
