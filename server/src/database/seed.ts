import { Sequelize } from 'sequelize-typescript'
import { Buyer } from './models/Buyer'
import { Cnpj } from './models/Cnpj'
import { Order } from './models/Order'
import { Provider } from './models/Provider'
import { User } from './models/User'

export const seedDatabase = async (sequelizeInstance: Sequelize): Promise<void> => {
  await sequelizeInstance.sync({ force: true })

  const buyerRepo = sequelizeInstance.getRepository(Buyer)
  const cnpjRepo = sequelizeInstance.getRepository(Cnpj)
  const providerRepo = sequelizeInstance.getRepository(Provider)
  const orderRepo = sequelizeInstance.getRepository(Order)
  const userRepo = sequelizeInstance.getRepository(User)

  const t = await sequelizeInstance.transaction()

  try {
    await cnpjRepo.bulkCreate([
      {
        cnpj: '00000000000001',
        companyType: '2',
        createdAt: new Date('2020-10-29 21:20:33'),
        updatedAt: new Date('2020-10-29 21:20:33')
      },
      {
        cnpj: '00000000000002',
        companyType: '1',
        createdAt: new Date('2020-10-29 21:20:33'),
        updatedAt: new Date('2020-10-29 21:20:33')
      }
    ], { transaction: t })

    await buyerRepo.create({
      name: 'SACADO 001',
      tradingName: 'SACADO 001 LTDA',
      cashforceTax: '0',
      createdAt: new Date('2020-10-29 21:20:33'),
      updatedAt: new Date('2020-10-29 21:20:33'),
      cnpjId: 1,
      confirm: 1
    }, { transaction: t })

    await providerRepo.create({
      name: 'CEDENTE 002',
      tradingName: 'CEDENTE 002 LTDA',
      cashforceTax: '0',
      createdAt: new Date('2020-10-29 21:22:21'),
      updatedAt: new Date('2020-10-29 21:22:22'),
      cnpjId: 2
    }, { transaction: t })

    await userRepo.create({
      name: 'ALLAN SOUZA',
      email: 'allan@cashforce.com.br',
      verificationCode: '',
      emailChecked: 1,
      createdAt: new Date('2020-10-01 21:31:37'),
      updatedAt: new Date('2020-10-01 22:41:23'),
      cashforceAdm: 1
    }, { transaction: t })

    await orderRepo.bulkCreate([
      {
        orderNfId: '1605181324132',
        orderNumber: '18153',
        emissionDate: new Date('2020-10-30T11:00:00-03:00'),
        emitedTo: '22843980000127',
        nNf: '18153',
        CTE: '',
        value: '198450',
        createdAt: new Date('2020-10-30 17:54:18'),
        updatedAt: new Date('2020-10-30 17:54:18'),
        cnpjId: 1,
        userId: 1,
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: '0',
        orderStatusProvider: '0'
      },
      {
        orderNfId: '160518132413',
        orderNumber: '18157',
        emissionDate: new Date('2020-11-04T15:32:35-02:00'),
        emitedTo: '35705180000272',
        nNf: '18157',
        CTE: '',
        value: '168850',
        createdAt: new Date('2020-11-10 18:33:46'),
        updatedAt: new Date('2020-11-10 18:33:46'),
        cnpjId: 1,
        userId: 1,
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: '0',
        orderStatusProvider: '0'
      },
      {
        orderNfId: '1605181324130',
        orderNumber: '18184',
        emissionDate: new Date('2020-11-10'),
        emitedTo: '00418477002640',
        nNf: '18184',
        CTE: '',
        value: '222795',
        createdAt: new Date('2020-11-12 11:42:06'),
        updatedAt: new Date('2020-11-18 12:22:14'),
        cnpjId: 1,
        userId: 1,
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: '7',
        orderStatusProvider: '3'
      }
    ], { transaction: t })

    await t.commit()
    console.log('Database seeded successfully')
  } catch (err: any) {
    console.log('Database seed failed')
    console.log(err.message)
    await t.rollback()
  }
}
