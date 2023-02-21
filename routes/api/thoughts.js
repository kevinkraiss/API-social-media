const router = require('express').Router()
const thoughtsController = require('../../controllers/thoughtsController')

// GET
router.get('/', thoughtsController.findAll)
router.get('/:id', thoughtsController.findOne)
// POST
router.post('/', thoughtsController.create)
// PUT
router.put('/:id', thoughtsController.update)
// DELETE
router.delete('/:id', thoughtsController.delete)

// add/delete reactions
router.post('/:thoughtId/reactions', thoughtsController.addReaction)
router.delete('/:thoughtId/reactions/:reactionId', thoughtsController.deleteReaction)

module.exports =router