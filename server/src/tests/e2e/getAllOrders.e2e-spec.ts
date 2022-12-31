import chai from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../../app'

const { expect } = chai

chai.use(chaiHttp)

describe('GET /orders', () => {
  it('should return status code 200 (OK)', async () => {
    const res = await chai.request(app).get('/orders')

    expect(res.status).to.equal(200)
  })
})
