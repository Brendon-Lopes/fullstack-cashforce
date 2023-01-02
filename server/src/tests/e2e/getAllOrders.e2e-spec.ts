import chai from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import { app } from '../../app'
import { Buyer } from '../../database/models/Buyer'
import { Order } from '../../database/models/Order'
import { Provider } from '../../database/models/Provider'
import { GetAllOrdersRepository } from '../../repositories/GetAllOrdersRepository'
import { testDatabase } from '../testDatabase'
import { ordersTestSeeder } from '../testSeeders/ordersTestSeeder'

const { expect } = chai

chai.use(chaiHttp)

describe('GET /orders', () => {
  before(async () => {
    await testDatabase.sync({ force: true })
    await testDatabase.getRepository(Order).bulkCreate(ordersTestSeeder as unknown as Order[])

    sinon.stub(GetAllOrdersRepository.prototype, 'execute').callsFake(
      async () => {
        return await testDatabase.getRepository(Order).findAll({
          include: [
            {
              model: testDatabase.getRepository(Buyer),
              attributes: ['name']
            },
            {
              model: testDatabase.getRepository(Provider),
              attributes: ['name']
            }
          ]
        })
      }
    )
  })

  it('should return status code 200 (OK)', async () => {
    const res = await chai.request(app).get('/orders')

    expect(res.status).to.equal(200)
  })

  it('should return an array of orders', async () => {
    const res = await chai.request(app).get('/orders')

    expect(res.body).to.be.an('array')
    expect(res.body).to.have.lengthOf(3)
    expect(res.body[0]).to.have.property('id')
    expect(res.body[0]).to.have.property('buyer')
    expect(res.body[0]).to.have.property('provider')
    expect(res.body[0]).to.have.property('emissionDate')
    expect(res.body[0]).to.have.property('value')
    expect(res.body[0]).to.have.property('orderStatusBuyer')
    expect(res.body[0]).to.have.property('createdAt')
    expect(res.body[0]).to.have.property('updatedAt')
    expect(res.body[0].cnpjId).to.be.equal(null)
  })
})
