import path from 'path'
import 'dotenv/config'
import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true
  },
  repositoryMode: true,
  models: [path.join(__dirname, '/models')]
})

export default sequelize
