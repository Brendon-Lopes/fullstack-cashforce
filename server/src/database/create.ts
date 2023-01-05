import mysql from 'mysql2/promise'
import 'dotenv/config'

const createDatabase = async (): Promise<void> => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true
  })

  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME ?? 'cashforce'}`)
    console.log('Database created successfully')
  } catch (err: any) {
    console.log('Database creation failed')
    console.log(err.message)
  }
}

createDatabase()
  .catch((err: any) => {
    console.log(err.message)
  })
  .finally(() => process.exit(0))
