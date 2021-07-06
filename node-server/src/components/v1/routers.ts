import express from 'express'
import * as componentController from './some-component/controller'

export const router = express.Router()

router.post('/route', componentController.func)
