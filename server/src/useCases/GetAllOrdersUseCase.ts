import { Order } from '../database/models/Order'
import { OrderStatus } from '../enums/OrderStatusEnum'
import { IGetAllRepository } from '../interfaces/IGetAllRepository'
import { IGetAllUseCase } from '../interfaces/IGetAllUseCase'

export class GetAllOrdersUseCase implements IGetAllUseCase<Order> {
  constructor (private readonly getAllOrdersRepository: IGetAllRepository<Order>) {}

  async execute (): Promise<Order[]> {
    const orders = await this.getAllOrdersRepository.execute()

    const ordersWithStatusName = orders.map((order) => {
      const statusNameBuyer = OrderStatus[Number(order.orderStatusBuyer)]
      const statusNameProvider = OrderStatus[Number(order.orderStatusProvider)]

      return Object.assign(order, {
        orderStatusBuyer: statusNameBuyer,
        orderStatusProvider: statusNameProvider
      })
    })

    return ordersWithStatusName
  }
}
