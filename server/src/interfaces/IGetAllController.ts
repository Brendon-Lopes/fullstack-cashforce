import { Request, Response } from 'express'

export interface IGetAllController<T> {
  execute: (req: Request, res: Response) => Promise<Response<T[]>>
}
