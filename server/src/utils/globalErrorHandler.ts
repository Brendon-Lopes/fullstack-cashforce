import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import CustomError from './CustomError'

const globalErrorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): Response => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ error: err.message })
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: err.message.trim() !== '' ? err.message : 'Something went wrong' })
}

export default globalErrorHandler
