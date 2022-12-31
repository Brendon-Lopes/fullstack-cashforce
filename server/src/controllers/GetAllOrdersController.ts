import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Order } from '../database/models/Order'
import { IGetAllController } from '../interfaces/IGetAllController'
import { IGetAllUseCase } from '../interfaces/IGetAllUseCase'

export class GetAllOrdersController implements IGetAllController<Order> {
  constructor (private readonly getAllOrdersUseCase: IGetAllUseCase<Order>) {}

  async execute (_req: Request, res: Response): Promise<Response<Order[]>> {
    const orders = await this.getAllOrdersUseCase.execute()
    return res.status(StatusCodes.OK).json(orders)
  }
}
