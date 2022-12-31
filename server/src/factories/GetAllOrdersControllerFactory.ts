import { GetAllOrdersController } from '../controllers/GetAllOrdersController'
import sequelize from '../database/config'
import { Buyer } from '../database/models/Buyer'
import { Order } from '../database/models/Order'
import { Provider } from '../database/models/Provider'
import { GetAllOrdersRepository } from '../repositories/GetAllOrdersRepository'
import { GetAllOrdersUseCase } from '../useCases/GetAllOrdersUseCase'

export class GetAllOrdersControllerFactory {
  static create (): GetAllOrdersController {
    const getAllOrdersRepository = new GetAllOrdersRepository(
      sequelize.getRepository(Order),
      sequelize.getRepository(Buyer),
      sequelize.getRepository(Provider)
    )

    const getAllOrdersUseCase = new GetAllOrdersUseCase(getAllOrdersRepository)

    return new GetAllOrdersController(getAllOrdersUseCase)
  }
}
