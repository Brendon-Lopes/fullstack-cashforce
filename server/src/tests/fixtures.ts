import { testDatabase } from './testDatabase'
import { seedDatabase } from '../database/seed'

export async function mochaGlobalSetup (): Promise<void> {
  await testDatabase.sync({ force: true })
  await seedDatabase(testDatabase)
  console.log('test database synced and seeded')
}

export async function mochaGlobalTeardown (): Promise<void> {
  await testDatabase.close()
  console.log('test database closed')
}
