const { Router } = require('express')
const UserController = require('./controllers/UserController')

const routes = Router()

routes.post('/user_register', UserController.store)
routes.get('/user_auth', UserController.auth)
routes.get('/teste', UserController.user_animes)

module.exports = routes
