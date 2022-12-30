import { AllowNull, Column, CreatedAt, Default, Model, Table, UpdatedAt } from 'sequelize-typescript'

@Table({ tableName: 'buyers' })
export class Buyer extends Model<Buyer> {
  @Column
    name!: string

  @Default(null)
  @AllowNull
  @Column
    tradingName?: string

  @Default(null)
  @AllowNull
  @Column
    cashforceTax?: string

  @Default(null)
  @AllowNull
  @Column
    responsibleName?: string

  @Default(null)
  @AllowNull
  @Column
    responsibleEmail?: string

  @Default(null)
  @AllowNull
  @Column
    responsiblePosition?: string

  @Default(null)
  @AllowNull
  @Column
    responsiblePhone?: string

  @Default(null)
  @AllowNull
  @Column
    responsibleMobile?: string

  @Default(null)
  @AllowNull
  @Column
    website?: string

  @Default(null)
  @AllowNull
  @Column
    postalCode?: string

  @Default(null)
  @AllowNull
  @Column
    address?: string

  @Default(null)
  @AllowNull
  @Column
    number?: string

  @Default(null)
  @AllowNull
  @Column
    complement?: string

  @Default(null)
  @AllowNull
  @Column
    neighborhood?: string

  @Default(null)
  @AllowNull
  @Column
    city?: string

  @Default(null)
  @AllowNull
  @Column
    state?: string

  @Default(null)
  @AllowNull
  @Column
    phoneNumber?: string

  @Default(null)
  @AllowNull
  @Column
    situation?: string

  @Default(null)
  @AllowNull
  @Column
    situationDate?: string

  @CreatedAt
  @Column
    createdAt!: Date

  @UpdatedAt
  @Column
    updatedAt!: Date

  // TODO: adicionar relação com a tabela de cnpj
  @Default(null)
  @AllowNull
  @Column
    cnpjId?: number

  @Default(1)
  @Column
    confirm!: number

  @Default(null)
  @AllowNull
  @Column
    email?: string
}
