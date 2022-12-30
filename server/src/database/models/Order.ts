import { BelongsTo, Column, CreatedAt, Default, ForeignKey, Model, Table, UpdatedAt } from 'sequelize-typescript'
import { Buyer } from './Buyer'
import { Cnpj } from './Cnpj'
import { Provider } from './Provider'
import { User } from './User'

@Table({ tableName: 'orders' })
export class Order extends Model<Order> {
  @Column
    orderNfId!: string

  @Column
    orderNumber!: string

  @Default(null)
  @Column
    orderPath?: string

  @Default(null)
  @Column
    orderFileName?: string

  @Default(null)
  @Column
    orderOriginalName?: string

  @Default(null)
  @Column
    emissionDate?: string

  @Default(null)
  @Column
    pdfFile?: string

  @Column
    emitedTo!: string

  @Default(null)
  @Column
    nNf?: string

  @Default(null)
  @Column
    CTE?: string

  @Default(null)
  @Column
    value?: string

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

  @ForeignKey(() => User)
  @Default(null)
  @Column
    userId?: number

  @BelongsTo(() => User)
    user?: User

  @ForeignKey(() => Buyer)
  @Default(null)
  @Column
    buyerId?: number

  @BelongsTo(() => Buyer)
    buyer?: Buyer

  @ForeignKey(() => Provider)
  @Default(null)
  @Column
    providerId?: number

  @BelongsTo(() => Provider)
    provider?: Provider

  @Default('0')
  @Column
    orderStatusBuyer?: string

  @Default('0')
  @Column
    orderStatusProvider?: string

  @Default(null)
  @Column
    deliveryReceipt?: string

  @Default(null)
  @Column
    cargoPackingList?: string

  @Default(null)
  @Column
    deliveryCtrc?: string
}
