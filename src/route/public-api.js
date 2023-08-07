import express from 'express'
import userController from '../controller/user-controller.js'
import healthController from '../controller/health-controller.js'

const publicRouter = new express.Router()

publicRouter.get('/api/users', userController.register)
publicRouter.get('/', healthController.healthCheck)

export {
    publicRouter
}