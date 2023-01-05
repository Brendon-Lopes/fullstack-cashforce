/* eslint-disable @typescript-eslint/no-unused-expressions */
import sinon from 'sinon'
import chai from 'chai'
import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Buyer } from '../database/models/Buyer'
import { Order } from '../database/models/Order'
import { Provider } from '../database/models/Provider'
import { GetAllOrdersRepository } from '../repositories/GetAllOrdersRepository'
import { GetAllOrdersUseCase } from '../useCases/GetAllOrdersUseCase'
import { testDatabase } from '../tests/testDatabase'
import { GetAllOrdersController } from './GetAllOrdersController'

const { expect } = chai

describe('GetAllOrdersController class', () => {
  const getAllOrdersRepository = new GetAllOrdersRepository(
    testDatabase.getRepository(Order),
    testDatabase.getRepository(Buyer),
    testDatabase.getRepository(Provider)
  )
  const getAllOrdersUseCase = new GetAllOrdersUseCase(getAllOrdersRepository)
  const getAllOrdersController = new GetAllOrdersController(getAllOrdersUseCase)

  const req = {} as Request
  const res = {} as Response

  before(async () => {
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub()
  })

  it('should return status code 200 (OK)', async () => {
    await getAllOrdersController.execute(req, res)

    expect((res.status as sinon.SinonStub).calledOnce).to.be.true
    expect((res.status as sinon.SinonStub).calledWith(StatusCodes.OK)).to.be.true

    expect((res.json as sinon.SinonStub).calledOnce).to.be.true
  })
})
