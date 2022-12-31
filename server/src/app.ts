import 'express-async-errors'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './routes'

export const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => res.status(418).send())

app.use(router)
