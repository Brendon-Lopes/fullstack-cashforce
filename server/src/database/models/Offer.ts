import { BelongsTo, Column, CreatedAt, Default, ForeignKey, Model, Table, UpdatedAt } from 'sequelize-typescript'
import { Order } from './Order'
import { Sponsor } from './Sponsor'

@Table({ tableName: 'offers' })
export class Offer extends Model {
  @Column
    tax!: string

  @Column
    tariff!: string

  @Column
    adValorem!: string

  @Column
    float!: string

  @Column
    iof!: string

  @Column
    expiresIn!: Date

  @Default(0)
  @Column
    paymentStatusSponsor!: number

  @Default(0)
  @Column
    paymentStatusProvider!: number

  @CreatedAt
  @Column
    createdAt!: Date

  @UpdatedAt
  @Column
    updatedAt!: Date

  @ForeignKey(() => Order)
  @Default(null)
  @Column
    orderId?: number

  @BelongsTo(() => Order)
    order?: Order

  @ForeignKey(() => Sponsor)
  @Default(null)
  @Column
    sponsorId?: number

  @BelongsTo(() => Sponsor)
    sponsor?: Sponsor
}
