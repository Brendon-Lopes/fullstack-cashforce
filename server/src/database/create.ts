import mysql from 'mysql2/promise'
import 'dotenv/config'
import { readFileSync } from 'fs'
import path from 'path'

const createDatabase = async (): Promise<void> => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true
  })

  const query = readFileSync(path.join(__dirname, 'queries/createDatabase.sql'), 'utf8')

  try {
    await connection.query(query)
    console.log('Database created successfully')
  } catch (err: any) {
    console.log('Database creation failed')
    console.log(err.message)
  }
}

createDatabase()
  .catch((err: any) => {
    console.log('Database creation failed')
    console.log(err.message)
  })
  .finally(() => process.exit(0))
