const router = require('express').Router()
const usersController = require('../../controllers/usersController')

// GET
router.get('/', usersController.findAll)
router.get('/:id', usersController.findOne)
// POST
router.post('/', usersController.create)
// PUT
router.put('/:id', usersController.update)
// DELETE
router.delete('/:id', usersController.delete)

// add and delete friends
router.post('/:userId/friends/:friendId', usersController.addFriend)
router.delete('/:userId/friends/:friendId', usersController.deleteFriend)

module.exports = router