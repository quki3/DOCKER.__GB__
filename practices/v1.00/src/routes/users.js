const controllers = require('../controllers/users.js');
const router = require('express').Router();

//crud
router
	.get('/',controllers.getAll)
	.get('/:id',controllers.getOne)
	.post('/',controllers.createOne)
	.put('/:id',controllers.updateOne)
	.delete('/:id',controllers.deleteOne)

module.exports = router;
