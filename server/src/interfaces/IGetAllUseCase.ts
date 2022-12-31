export interface IGetAllUseCase<T> {
  execute: () => Promise<T[]>
}
