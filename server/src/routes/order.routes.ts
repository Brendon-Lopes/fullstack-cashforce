import { Router } from 'express'
import { GetAllOrdersControllerFactory } from '../factories/GetAllOrdersControllerFactory'

const orderRouter = Router()

const getAllOrdersController = GetAllOrdersControllerFactory.create()

orderRouter.get('/', async (req, res) => await getAllOrdersController.execute(req, res))

export default orderRouter
