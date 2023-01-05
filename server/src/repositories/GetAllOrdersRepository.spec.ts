import chai from 'chai'
import { GetAllOrdersRepository } from './GetAllOrdersRepository'
import { Order } from '../database/models/Order'
import { Buyer } from '../database/models/Buyer'
import { Provider } from '../database/models/Provider'
import { testDatabase } from '../tests/testDatabase'

const { expect } = chai

describe('GetAllOrdersRepository class', () => {
  const getAllOrdersRepository = new GetAllOrdersRepository(
    testDatabase.getRepository(Order),
    testDatabase.getRepository(Buyer),
    testDatabase.getRepository(Provider)
  )

  it('should return an array of orders', async () => {
    const result = await getAllOrdersRepository.execute()

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
    expect(result[0].cnpjId).to.be.equal(1)
  })
})
