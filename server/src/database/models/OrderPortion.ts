import { BelongsTo, Column, CreatedAt, Default, ForeignKey, Model, Table, UpdatedAt } from 'sequelize-typescript'
import { Order } from './Order'

@Table({ tableName: 'orderportions' })
export class OrderPortion extends Model {
  @Column
    nDup!: string

  @Column
    dVenc!: string

  @Column
    vDup!: string

  @Default(1)
  @Column
    availableToMarket!: number

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
}
