export interface IGetAllRepository<T> {
  execute: () => Promise<T[]>
}
