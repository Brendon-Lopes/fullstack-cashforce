import sequelize from './config'
import { seedDatabase } from './seed'

seedDatabase(sequelize)
  .catch((err: any) => {
    console.log(err.message)
  })
  .finally(() => process.exit(0))
