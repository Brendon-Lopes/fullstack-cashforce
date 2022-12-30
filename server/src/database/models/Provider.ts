import { BelongsTo, Column, CreatedAt, Default, ForeignKey, Model, Table, UpdatedAt } from 'sequelize-typescript'
import { Cnpj } from './Cnpj'

@Table({ tableName: 'providers' })
export class Provider extends Model<Provider> {
  @Column
    name!: string

  @Default(null)
  @Column
    tradingName?: string

  @Default(null)
  @Column
    cashforceTax?: string

  @Default(null)
  @Column
    responsibleName?: string

  @Default(null)
  @Column
    responsibleEmail?: string

  @Default(null)
  @Column
    responsiblePosition?: string

  @Default(null)
  @Column
    responsiblePhone?: string

  @Default(null)
  @Column
    responsibleMobile?: string

  @Default(null)
  @Column
    website?: string

  @Default(null)
  @Column
    postalCode?: string

  @Default(null)
  @Column
    address?: string

  @Default(null)
  @Column
    number?: string

  @Default(null)
  @Column
    complement?: string

  @Default(null)
  @Column
    neighborhood?: string

  @Default(null)
  @Column
    city?: string

  @Default(null)
  @Column
    state?: string

  @Default(null)
  @Column
    bank?: string

  @Default(null)
  @Column
    bankAgency?: string

  @Default(null)
  @Column
    account?: string

  @Default(null)
  @Column
    documents?: string

  @Default(null)
  @Column
    phoneNumber?: string

  @Default(null)
  @Column
    situation?: string

  @Default(null)
  @Column
    situationDate?: string

  @CreatedAt
  @Column
    createdAt!: Date

  @UpdatedAt
  @Column
    updatedAt!: Date

  @ForeignKey(() => Cnpj)
  @Default(null)
  @Column
    cnpjId?: number

  @BelongsTo(() => Cnpj)
    cnpj?: Cnpj

  @Default(null)
  @Column
    email?: string
}
