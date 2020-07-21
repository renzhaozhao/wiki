const Router = require('koa-router')
const PersonController = require('../app/controllers/person')

const router = new Router({
  prefix: '/api'
})

router.get('/', PersonController.list)
router.get('/:id', PersonController.findOne)
router.post('/update/:id', PersonController.update)
router.post('/remove/:id', PersonController.remove)
router.post('/add', PersonController.add)

module.exports = router