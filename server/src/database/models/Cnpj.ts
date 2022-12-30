import { Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript'

@Table({ tableName: 'cnpjs' })
export class Cnpj extends Model<Cnpj> {
  @Column
    cnpj!: string

  @Column
    companyType!: string

  @CreatedAt
  @Column
    createdAt!: Date

  @UpdatedAt
  @Column
    updatedAt!: Date
}
