const router = require('express').Router();
const controllers = require('../controllers/dev');

console.log('error 1 require a function',typeof controllers.services);
router.get('/services',controllers.services);

module.exports = router;
