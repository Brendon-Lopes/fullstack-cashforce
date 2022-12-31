import { Repository } from 'sequelize-typescript'
import { Buyer } from '../database/models/Buyer'
import { Order } from '../database/models/Order'
import { Provider } from '../database/models/Provider'
import { IGetAllRepository } from '../interfaces/IGetAllRepository'

export class GetAllOrdersRepository implements IGetAllRepository<Order> {
  constructor (
    private readonly orderRepository: Repository<Order>,
    private readonly buyerRepository: Repository<Buyer>,
    private readonly providerRepository: Repository<Provider>
  ) { }

  async execute (): Promise<Order[]> {
    return await this.orderRepository.findAll({
      include: [
        {
          model: this.buyerRepository,
          attributes: ['name']
        },
        {
          model: this.providerRepository,
          attributes: ['name']
        }
      ]
    })
  }
}
