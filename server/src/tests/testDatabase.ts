import path from 'path'
import { Sequelize } from 'sequelize-typescript'

export const testDatabase = new Sequelize({
  database: 'test',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  repositoryMode: true,
  models: [path.join(__dirname, '../database/models/*')]
})
