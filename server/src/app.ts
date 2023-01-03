import 'express-async-errors'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './routes'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './docs/swagger.json'

export const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.get('/', (req, res) => res.status(418).send())

app.use(router)
