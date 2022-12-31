import chai from 'chai'
import { GetAllOrdersUseCase } from './GetAllOrdersUseCase'
import { testDatabase } from '../tests/testDatabase'
import { Order } from '../database/models/Order'
import { ordersTestSeeder } from '../tests/testSeeders/ordersTestSeeder'
import { GetAllOrdersRepository } from '../repositories/GetAllOrdersRepository'
import { Buyer } from '../database/models/Buyer'
import { Provider } from '../database/models/Provider'

const { expect } = chai

describe('GetAllOrdersUseCase class', () => {
  before(async () => {
    await testDatabase.sync({ force: true })
    await testDatabase.getRepository(Order).bulkCreate(ordersTestSeeder as unknown as Order[])
  })

  after(async () => {
    await testDatabase.getRepository(Order).destroy({ where: {} })
  })

  const getAllOrdersRepository = new GetAllOrdersRepository(
    testDatabase.getRepository(Order),
    testDatabase.getRepository(Buyer),
    testDatabase.getRepository(Provider)
  )

  const getAllOrdersUseCase = new GetAllOrdersUseCase(getAllOrdersRepository)

  it('should return an array of orders', async () => {
    const result = await getAllOrdersUseCase.execute()

    expect(result).to.be.an('array')
    expect(result).to.have.lengthOf(3)
    expect(result[0]).to.have.property('id')
    expect(result[0]).to.have.property('buyer')
    expect(result[0]).to.have.property('provider')
    expect(result[0]).to.have.property('emissionDate')
    expect(result[0]).to.have.property('value')
    expect(result[0]).to.have.property('orderStatusBuyer')
    expect(result[0]).to.have.property('createdAt')
    expect(result[0]).to.have.property('updatedAt')
    expect(result[0].cnpjId).to.be.equal(null)
    expect(result[0].orderStatusBuyer).to.be.equal('Pendente de confirmação')
    expect(result[0].orderStatusProvider).to.be.equal('Pendente de confirmação')
  })
})
