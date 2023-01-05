import { Column, CreatedAt, Default, Model, Table, UpdatedAt } from 'sequelize-typescript'

@Table({ tableName: 'users' })
export class User extends Model {
  @Column
    name!: string

  @Column
    email!: string

  @Default(null)
  @Column
    phonenumber?: string

  @Default(null)
  @Column
    mobile?: string

  @Default(null)
  @Column
    departament?: string

  @Default(null)
  @Column
    verificationcode?: string

  @Default(0)
  @Column
    emailchecked?: number

  @Default(0)
  @Column
    cashforceadm?: number

  @CreatedAt
  @Column
    createdat!: Date

  @UpdatedAt
  @Column
    updatedat!: Date
}
